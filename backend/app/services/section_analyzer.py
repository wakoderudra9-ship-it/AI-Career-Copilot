def analyze_resume_sections(text: str):
    text_lower = text.lower()

    scores = {}

    # Professional Summary
    summary_keywords = [
        "summary",
        "profile",
        "objective",
        "about me"
    ]

    scores["summary"] = 10 if any(
        keyword in text_lower for keyword in summary_keywords
    ) else 2

    # Skills
    skills_keywords = [
        "python",
        "java",
        "sql",
        "docker",
        "aws",
        "git",
        "react",
        "fastapi"
    ]

    skill_count = sum(
        1 for skill in skills_keywords
        if skill in text_lower
    )

    scores["skills"] = min(skill_count, 10)

    # Projects
    project_keywords = [
        "project",
        "developed",
        "built",
        "created"
    ]

    scores["projects"] = 10 if any(
        keyword in text_lower for keyword in project_keywords
    ) else 3

    # Experience
    experience_keywords = [
        "experience",
        "intern",
        "developer",
        "engineer"
    ]

    scores["experience"] = 10 if any(
        keyword in text_lower for keyword in experience_keywords
    ) else 3

    # Education
    education_keywords = [
        "b.tech",
        "b.e",
        "m.tech",
        "degree",
        "university",
        "college"
    ]

    scores["education"] = 10 if any(
        keyword in text_lower for keyword in education_keywords
    ) else 2

    # Certifications
    certification_keywords = [
        "certification",
        "certificate",
        "aws certified",
        "google cloud"
    ]

    scores["certifications"] = 10 if any(
        keyword in text_lower for keyword in certification_keywords
    ) else 1

    # Achievements
    achievement_keywords = [
        "achievement",
        "award",
        "winner",
        "hackathon"
    ]

    scores["achievements"] = 10 if any(
        keyword in text_lower for keyword in achievement_keywords
    ) else 1

    return scores