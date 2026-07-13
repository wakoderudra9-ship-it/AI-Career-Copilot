import re


def match_resume_with_job(resume_text: str, job_description: str):
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

    resume_skills = []
    job_skills = []

    for skill in skills_database:
        if re.search(rf"\b{re.escape(skill)}\b", resume_text, re.IGNORECASE):
            resume_skills.append(skill)

        if re.search(rf"\b{re.escape(skill)}\b", job_description, re.IGNORECASE):
            job_skills.append(skill)

    matched_skills = []

    for skill in resume_skills:
        if skill in job_skills:
            matched_skills.append(skill)

    missing_skills = []

    for skill in job_skills:
        if skill not in resume_skills:
            missing_skills.append(skill)

    if len(job_skills) == 0:
        match_score = 0
    else:
        match_score = int((len(matched_skills) / len(job_skills)) * 100)

    if match_score >= 80:
        recommendation = "Excellent match! Your resume closely matches the job description."
    elif match_score >= 60:
        recommendation = "Good match. Improve the missing skills to increase your chances."
    else:
        recommendation = "Your resume needs significant improvements for this role."

    return {
        "match_score": match_score,
        "matched_skills": matched_skills,
        "missing_skills": missing_skills,
        "recommendation": recommendation
    }