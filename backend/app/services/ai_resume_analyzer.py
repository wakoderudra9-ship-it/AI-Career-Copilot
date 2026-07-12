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

    # -------------------------
    # Email
    # -------------------------

    email = None

    email_match = re.search(
        r"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}",
        text
    )

    if email_match:
        email = email_match.group()

    # -------------------------
    # Phone
    # -------------------------

    phone = None

    phone_match = re.search(
        r"\+?\d[\d\s-]{8,}",
        text
    )

    if phone_match:
        phone = phone_match.group()

    # -------------------------
    # Education
    # -------------------------

    education_keywords = [
        "B.Tech",
        "M.Tech",
        "B.E",
        "M.E",
        "BCA",
        "MCA",
        "Bachelor",
        "Master",
        "Information Technology",
        "Computer Science"
    ]

    education = []

    for item in education_keywords:
        if item.lower() in text.lower():
            education.append(item)

    # -------------------------
    # Experience
    # -------------------------

    experience = []

    experience_keywords = [
        "Software Engineer",
        "Backend Developer",
        "Frontend Developer",
        "Full Stack Developer",
        "Data Scientist",
        "Machine Learning Engineer",
        "AI Engineer",
        "Intern"
    ]

    for job in experience_keywords:
        if job.lower() in text.lower():
            experience.append(job)

    # -------------------------
    # Resume Score
    # -------------------------

    score = 0

    score += len(found_skills) * 8

    if email:
        score += 10

    if phone:
        score += 10

    if education:
        score += 15

    if experience:
        score += 20

    if score > 100:
        score = 100

    ats_score = min(score + 5, 100)

    # -------------------------
    # Missing Skills
    # -------------------------

    important_skills = [
        "Git",
        "Docker",
        "AWS",
        "SQL",
        "Python"
    ]

    missing_skills = []

    for skill in important_skills:
        if skill not in found_skills:
            missing_skills.append(skill)

    # -------------------------
    # Suggestions
    # -------------------------

    suggestions = []

    if not email:
        suggestions.append("Add your email address.")

    if not phone:
        suggestions.append("Add your phone number.")

    if len(found_skills) < 5:
        suggestions.append("Include more technical skills.")

    if not experience:
        suggestions.append("Mention internships or work experience.")

    if not education:
        suggestions.append("Mention your education.")

    return {
        "resume_score": score,
        "ats_score": ats_score,
        "skills": found_skills,
        "education": education,
        "experience": experience,
        "missing_skills": missing_skills,
        "email": email,
        "phone": phone,
        "suggestions": suggestions
    }