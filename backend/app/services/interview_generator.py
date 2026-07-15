def generate_interview_questions(resume_analysis, job_description):
    """
    Generate categorized interview questions and interview tips.
    """

    # -----------------------------
    # Technical Questions
    # -----------------------------

    technical_questions = []

    for skill in resume_analysis["skills"]:
        technical_questions.append(
            f"Explain your experience with {skill}."
        )

    keywords = [
        "Python",
        "FastAPI",
        "SQL",
        "Docker",
        "AWS",
        "Git",
        "REST API",
        "PostgreSQL",
        "Machine Learning"
    ]

    for keyword in keywords:
        if keyword.lower() in job_description.lower():
            technical_questions.append(
                f"What is your experience with {keyword}?"
            )

    # Remove duplicates
    technical_questions = list(dict.fromkeys(technical_questions))

    # -----------------------------
    # Project Questions
    # -----------------------------

    project_questions = []

    if resume_analysis["experience"]:
        for exp in resume_analysis["experience"]:
            project_questions.append(
                f"Tell us about your experience as a {exp}."
            )

    project_questions.extend([
        "Describe your AI Career Copilot project.",
        "What was the biggest challenge you faced in your project?",
        "How did you design your backend architecture?"
    ])

    # -----------------------------
    # Behavioral Questions
    # -----------------------------

    behavioral_questions = [
        "Describe a difficult technical problem you solved.",
        "Tell me about a time you worked in a team.",
        "How do you handle tight deadlines?",
        "Describe a situation where you had to learn a new technology quickly."
    ]

    # -----------------------------
    # HR Questions
    # -----------------------------

    hr_questions = [
        "Tell me about yourself.",
        "Why should we hire you?",
        "What are your strengths?",
        "What are your weaknesses?",
        "Where do you see yourself in five years?"
    ]

    # -----------------------------
    # Interview Tips
    # -----------------------------

    tips = []

    if "Git" not in resume_analysis["skills"]:
        tips.append("Revise Git commands and workflows.")

    if "AWS" not in resume_analysis["skills"]:
        tips.append("Learn AWS basics such as EC2 and S3.")

    if "Docker" not in resume_analysis["skills"]:
        tips.append("Practice Docker containers and Dockerfiles.")

    tips.extend([
        "Practice explaining your AI Career Copilot project confidently.",
        "Prepare STAR-based answers for behavioral questions.",
        "Review SQL joins, indexing and normalization."
    ])

    # -----------------------------
    # Difficulty
    # -----------------------------

    skill_count = len(resume_analysis["skills"])

    if skill_count >= 8:
        difficulty = "Hard"
    elif skill_count >= 5:
        difficulty = "Medium"
    else:
        difficulty = "Easy"

    return {
        "difficulty": difficulty,
        "technical_questions": technical_questions,
        "project_questions": project_questions,
        "behavioral_questions": behavioral_questions,
        "hr_questions": hr_questions,
        "tips": tips
    }