import json

from app.services.gemini_service import generate_text


def generate_career_roadmap(career_goal: str):

    prompt = f"""
You are an expert software engineering career mentor.

A user wants to become a:

{career_goal}

Respond ONLY in valid JSON.

Format:

{{
    "career_goal": "...",
    "current_level": "Beginner",
    "estimated_duration": "...",
    "roadmap": [
        "...",
        "..."
    ],
    "projects": [
        "...",
        "..."
    ],
    "certifications": [
        "...",
        "..."
    ],
    "interview_tips": [
        "...",
        "..."
    ]
}}

Return ONLY JSON.
Do not use markdown.
"""

    try:
        response = generate_text(prompt)

        # Remove markdown if Gemini wraps the JSON
        response = response.replace("```json", "")
        response = response.replace("```", "")
        response = response.strip()

        return json.loads(response)

    except Exception as e:
        print("Gemini Error:", e)

        return {
            "career_goal": career_goal,
            "current_level": "Unknown",
            "estimated_duration": "Unavailable",
            "roadmap": [
                "AI service is temporarily unavailable."
            ],
            "projects": [],
            "certifications": [],
            "interview_tips": []
        }