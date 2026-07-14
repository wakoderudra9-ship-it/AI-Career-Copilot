def rewrite_resume(text: str):
    """
    Generate AI-style improvements for the resume.
    """

    improved_summary = (
        "Backend Developer skilled in Python, FastAPI, SQL, and Docker "
        "with a strong interest in building scalable backend systems and REST APIs."
    )

    improved_skills = [
        "Python",
        "FastAPI",
        "SQL",
        "Docker",
        "Git",
        "AWS",
        "REST API"
    ]

    improved_projects = [
        {
            "title": "AI Career Copilot",
            "description": (
                "Built an AI-powered career assistant using FastAPI, "
                "JWT Authentication, PostgreSQL, Resume Analysis "
                "and ATS scoring."
            )
        }
    ]

    return {
        "summary": improved_summary,
        "skills": improved_skills,
        "projects": improved_projects
    }