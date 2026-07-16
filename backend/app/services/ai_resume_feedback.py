from app.services.gemini_service import generate_text


def generate_ai_resume_feedback(resume_text: str):

    prompt = f"""
You are an expert technical recruiter.

Analyze the following resume.

Resume:
{resume_text}

Provide:

1. Overall Review

2. Strengths

3. Weaknesses

4. ATS Improvements

5. Final Recommendation

Keep the feedback professional and concise.
"""

    try:
        return generate_text(prompt)

    except Exception as e:
        print("Gemini Error:", e)

        return (
            "AI feedback is temporarily unavailable because the Gemini "
            "service is busy. Please try again in a few minutes."
        )