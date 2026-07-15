from pydantic import BaseModel
from typing import List


class MockInterviewRequest(BaseModel):
    question: str
    answer: str


class MockInterviewResponse(BaseModel):
    technical_score: int
    communication_score: int
    confidence_score: int
    overall_score: int

    strengths: List[str]
    weaknesses: List[str]
    suggestions: List[str]