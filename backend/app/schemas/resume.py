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

    section_scores: dict
    section_feedback: dict
    ai_rewrite: dict

    skills: List[str]
    education: List[str]
    experience: List[str]
    missing_skills: List[str]

    email: Optional[str] = None
    phone: Optional[str] = None

    suggestions: List[str]

    strengths: List[str]
    weaknesses: List[str]
    improvement_suggestions: List[str]

    # NEW AI Feedback
    ai_feedback: str


class ResumeAnalysisResponse(BaseModel):
    resume: ResumeResponse
    extracted_text: str
    analysis: ResumeAnalysis