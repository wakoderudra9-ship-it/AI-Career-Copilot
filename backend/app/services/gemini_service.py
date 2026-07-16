import os

from dotenv import load_dotenv
from google import genai

load_dotenv()

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)


def generate_text(prompt: str, model: str = "models/gemini-2.5-flash"):
    """
    Shared Gemini text generation function.
    """

    response = client.models.generate_content(
        model=model,
        contents=prompt
    )

    return response.text


def list_models():
    models = client.models.list()

    return [model.name for model in models]