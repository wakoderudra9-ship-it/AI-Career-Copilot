from pydantic import BaseModel
from typing import List


class CareerRoadmapRequest(BaseModel):
    career_goal: str


class CareerRoadmapResponse(BaseModel):
    career_goal: str
    current_level: str
    estimated_duration: str

    roadmap: List[str]
    projects: List[str]
    certifications: List[str]
    interview_tips: List[str]