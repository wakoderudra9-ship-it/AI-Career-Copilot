import re


def generate_resume_suggestions(text: str):
    strengths = []
    weaknesses = []
    suggestions = []

    lower_text = text.lower()

    # -------------------------
    # GitHub
    # -------------------------
    if "github.com" in lower_text:
        strengths.append("GitHub profile included.")
    else:
        weaknesses.append("GitHub profile is missing.")
        suggestions.append("Add your GitHub profile link.")

    # -------------------------
    # LinkedIn
    # -------------------------
    if "linkedin.com" in lower_text:
        strengths.append("LinkedIn profile included.")
    else:
        weaknesses.append("LinkedIn profile is missing.")
        suggestions.append("Add your LinkedIn profile.")

    # -------------------------
    # Professional Summary
    # -------------------------
    if "summary" in lower_text or "objective" in lower_text:
        strengths.append("Professional summary found.")
    else:
        weaknesses.append("Professional summary missing.")
        suggestions.append(
            "Write a professional summary at the top of your resume."
        )

    # -------------------------
    # Projects
    # -------------------------
    if "project" in lower_text:
        strengths.append("Projects section available.")
    else:
        weaknesses.append("Projects section missing.")
        suggestions.append(
            "Include academic or personal projects."
        )

    # -------------------------
    # Certifications
    # -------------------------
    if "certification" in lower_text:
        strengths.append("Certifications included.")
    else:
        weaknesses.append("No certifications found.")
        suggestions.append(
            "Add certifications like AWS, Azure, Google Cloud, etc."
        )

    # -------------------------
    # Achievements
    # -------------------------
    achievement_keywords = [
        "achievements",
        "award",
        "winner",
        "rank"
    ]

    if any(word in lower_text for word in achievement_keywords):
        strengths.append("Achievements section found.")
    else:
        weaknesses.append("Achievements missing.")
        suggestions.append(
            "Include awards, achievements or hackathon results."
        )

    return {
        "strengths": strengths,
        "weaknesses": weaknesses,
        "suggestions": suggestions
    }