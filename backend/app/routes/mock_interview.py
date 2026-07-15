from fastapi import APIRouter

from app.schemas.mock_interview import (
    MockInterviewRequest,
    MockInterviewResponse
)

from app.services.mock_interview import evaluate_answer


router = APIRouter(
    prefix="/mock-interview",
    tags=["AI Mock Interview"]
)


@router.post("/", response_model=MockInterviewResponse)
def mock_interview(request: MockInterviewRequest):

    result = evaluate_answer(
        request.question,
        request.answer
    )

    return result