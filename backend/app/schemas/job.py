from pydantic import BaseModel
from typing import List


class JobDescription(BaseModel):
    description: str


class JobMatchResponse(BaseModel):
    match_score: int
    matched_skills: List[str]
    missing_skills: List[str]
    recommendation: str