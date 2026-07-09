from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app.models import Profile, User
from app.schemas.profile import (
    ProfileCreate,
    ProfileUpdate,
    ProfileResponse
)
from app.dependencies import get_current_user

router = APIRouter(
    prefix="/profile",
    tags=["Profile"]
)


@router.post("/", response_model=ProfileResponse)
def create_profile(
    profile: ProfileCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    existing_profile = db.query(Profile).filter(
        Profile.user_id == current_user.id
    ).first()

    if existing_profile:
        raise HTTPException(
            status_code=400,
            detail="Profile already exists"
        )

    new_profile = Profile(
        **profile.model_dump(),
        user_id=current_user.id
    )

    db.add(new_profile)
    db.commit()
    db.refresh(new_profile)

    return new_profile


@router.get("/", response_model=ProfileResponse)
def get_profile(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    profile = db.query(Profile).filter(
        Profile.user_id == current_user.id
    ).first()

    if not profile:
        raise HTTPException(
            status_code=404,
            detail="Profile not found"
        )

    return profile

@router.put("/", response_model=ProfileResponse)
def update_profile(
    profile: ProfileUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    existing_profile = db.query(Profile).filter(
        Profile.user_id == current_user.id
    ).first()

    if not existing_profile:
        raise HTTPException(
            status_code=404,
            detail="Profile not found"
        )

    existing_profile.phone = profile.phone
    existing_profile.location = profile.location
    existing_profile.bio = profile.bio
    existing_profile.linkedin = profile.linkedin
    existing_profile.github = profile.github
    existing_profile.portfolio = profile.portfolio

    db.commit()
    db.refresh(existing_profile)

    return existing_profile