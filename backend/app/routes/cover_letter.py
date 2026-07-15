from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app.dependencies import get_current_user
from app.models import Resume, User

from app.services.resume_parser import extract_text_from_pdf
from app.services.ai_resume_analyzer import analyze_resume
from app.services.cover_letter_generator import generate_cover_letter

from app.schemas.cover_letter import (
    CoverLetterRequest,
    CoverLetterResponse
)

router = APIRouter(
    prefix="/cover-letter",
    tags=["AI Cover Letter"]
)


@router.post("/", response_model=CoverLetterResponse)
def create_cover_letter(
    request: CoverLetterRequest,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    latest_resume = (
        db.query(Resume)
        .filter(Resume.user_id == current_user.id)
        .order_by(Resume.id.desc())
        .first()
    )

    if latest_resume is None:
        raise HTTPException(
            status_code=404,
            detail="No resume uploaded."
        )

    resume_text = extract_text_from_pdf(
        latest_resume.file_path
    )

    resume_analysis = analyze_resume(resume_text)

    result = generate_cover_letter(
        resume_analysis,
        request.job_description
    )

    return result