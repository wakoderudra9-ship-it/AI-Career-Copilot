import os
from dotenv import load_dotenv
from google import genai

# Load environment variables
load_dotenv()

# Create Gemini client
client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)


def generate_text(prompt: str) -> str:
    """
    Generate text using Gemini.
    """

    response = client.models.generate_content(
        model="gemini-flash-latest",
        contents=prompt
    )

    return response.text