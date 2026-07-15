from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app.dependencies import get_current_user
from app.models import Resume, User

from app.services.resume_parser import extract_text_from_pdf
from app.services.ai_resume_analyzer import analyze_resume
from app.services.interview_generator import generate_interview_questions

from app.schemas.interview import (
    InterviewRequest,
    InterviewResponse
)

router = APIRouter(
    prefix="/interview",
    tags=["AI Interview"]
)


@router.post("/", response_model=InterviewResponse)
def generate_interview(
    request: InterviewRequest,
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

    result = generate_interview_questions(
        resume_analysis,
        request.job_description
    )

    return result