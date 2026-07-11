import re


def analyze_resume(text: str):
    skills_database = [
        "Python",
        "Java",
        "C++",
        "C",
        "JavaScript",
        "TypeScript",
        "FastAPI",
        "Django",
        "Flask",
        "React",
        "Angular",
        "Node.js",
        "SQL",
        "PostgreSQL",
        "MongoDB",
        "Docker",
        "Kubernetes",
        "AWS",
        "Git",
        "Machine Learning",
        "Deep Learning",
        "TensorFlow",
        "PyTorch"
    ]

    found_skills = []

    for skill in skills_database:
        if skill.lower() in text.lower():
            found_skills.append(skill)

    email = None

    email_match = re.search(
        r"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}",
        text
    )

    if email_match:
        email = email_match.group()

    phone = None

    phone_match = re.search(
        r"\+?\d[\d\s-]{8,}",
        text
    )

    if phone_match:
        phone = phone_match.group()

    return {
        "skills": found_skills,
        "email": email,
        "phone": phone
    }