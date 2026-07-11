from app.services.resume_parser import extract_text_from_pdf
from app.services.ai_resume_analyzer import analyze_resume
import os
import shutil

from fastapi import APIRouter, Depends, UploadFile, File, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app.models import Resume, User
from app.schemas.resume import ResumeAnalysisResponse
from app.dependencies import get_current_user

router = APIRouter(
    prefix="/resume",
    tags=["Resume"]
)


@router.post("/", response_model=ResumeAnalysisResponse)
def upload_resume(
    resume: UploadFile = File(...),
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    if not resume.filename.endswith(".pdf"):
        raise HTTPException(
            status_code=400,
            detail="Only PDF files are allowed."
        )

    upload_folder = "uploads"
    os.makedirs(upload_folder, exist_ok=True)

    file_path = os.path.join(upload_folder, resume.filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(resume.file, buffer)

    new_resume = Resume(
        filename=resume.filename,
        file_path=file_path,
        user_id=current_user.id
    )

    db.add(new_resume)
    db.commit()
    db.refresh(new_resume)

    # Extract text from the PDF
    text = extract_text_from_pdf(file_path)

    # Analyze the extracted text
    analysis = analyze_resume(text)

    # Return everything
    return {
        "resume": new_resume,
        "extracted_text": text,
        "analysis": analysis
    }