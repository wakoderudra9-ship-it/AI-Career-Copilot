from pydantic import BaseModel
from typing import List


class InterviewRequest(BaseModel):
    job_description: str


class InterviewResponse(BaseModel):
    difficulty: str

    technical_questions: List[str]

    project_questions: List[str]

    behavioral_questions: List[str]

    hr_questions: List[str]

    tips: List[str]