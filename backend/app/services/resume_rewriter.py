from app.services.gemini_service import generate_text


def rewrite_resume(text: str):
    """
    Rewrite the resume professionally using Gemini AI.
    """

    prompt = f"""
You are an expert resume writer.

Rewrite the following resume professionally.

Resume:
{text}

Respond ONLY in valid JSON.

Format:

{{
    "summary": "...",

    "skills": [
        "...",
        "..."
    ],

    "projects": [
        {{
            "title": "...",
            "description": "..."
        }}
    ]
}}

Do not include markdown.
Return only JSON.
"""

    try:
        import json

        response = generate_text(prompt)

        # Remove markdown if Gemini wraps JSON
        response = response.replace("```json", "")
        response = response.replace("```", "")
        response = response.strip()

        return json.loads(response)

    except Exception as e:
        print("Gemini Error:", e)

        return {
            "summary": "AI resume rewriting is temporarily unavailable.",
            "skills": [],
            "projects": []
        }