from fastapi import APIRouter

from app.schemas.career_roadmap import (
    CareerRoadmapRequest,
    CareerRoadmapResponse
)

from app.services.career_roadmap_generator import (
    generate_career_roadmap
)

router = APIRouter(
    prefix="/career-roadmap",
    tags=["AI Career Roadmap"]
)


@router.post("/", response_model=CareerRoadmapResponse)
def generate_roadmap(request: CareerRoadmapRequest):

    roadmap = generate_career_roadmap(
        request.career_goal
    )

    return roadmap