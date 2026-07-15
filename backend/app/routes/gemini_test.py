from fastapi import APIRouter

from app.services.gemini_service import generate_text

router = APIRouter(
    prefix="/gemini",
    tags=["Gemini AI"]
)


@router.get("/test")
def test_gemini():

    prompt = "Say hello to AI Career Copilot in one sentence."

    response = generate_text(prompt)

    return {
        "response": response
    }