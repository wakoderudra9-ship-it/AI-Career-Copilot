from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app.dependencies import get_current_user
from app.models import Resume, User

from app.services.resume_parser import extract_text_from_pdf
from app.services.job_matcher import match_resume_with_job

from app.schemas.job import JobDescription


router = APIRouter(
    prefix="/job",
    tags=["Job Matching"]
)


@router.post("/match")
def match_job(
    job: JobDescription,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    # Get latest uploaded resume
    latest_resume = (
        db.query(Resume)
        .filter(Resume.user_id == current_user.id)
        .order_by(Resume.id.desc())
        .first()
    )

    # Check if resume exists
    if not latest_resume:
        raise HTTPException(
            status_code=404,
            detail="No resume uploaded."
        )

    # Extract text from resume
    resume_text = extract_text_from_pdf(
        latest_resume.file_path
    )

    # Match resume with job description
    result = match_resume_with_job(
        resume_text,
        job.description
    )

    return result