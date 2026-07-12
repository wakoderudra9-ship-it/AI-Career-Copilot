from pydantic import BaseModel
from typing import List, Optional


class ResumeResponse(BaseModel):
    id: int
    filename: str
    file_path: str
    user_id: int

    class Config:
        from_attributes = True


class ResumeAnalysis(BaseModel):
    resume_score: int
    ats_score: int

    skills: List[str]
    education: List[str]
    experience: List[str]
    missing_skills: List[str]

    email: Optional[str] = None
    phone: Optional[str] = None

    suggestions: List[str]


class ResumeAnalysisResponse(BaseModel):
    resume: ResumeResponse
    extracted_text: str
    analysis: ResumeAnalysis