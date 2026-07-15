def generate_cover_letter(resume_analysis, job_description):
    """
    Generates a personalized cover letter using
    resume analysis and job description.
    """

    skills = ", ".join(resume_analysis["skills"])

    cover_letter = f"""
Dear Hiring Manager,

I am excited to apply for the position at your company.

With experience in {skills}, I have developed strong backend development skills and enjoy building scalable applications.

My background includes working with modern technologies such as Python, FastAPI, SQL, Docker, and REST APIs. I am passionate about learning new technologies and solving real-world problems.

After reviewing your job description, I believe my technical background and enthusiasm make me a strong candidate for this role.

Thank you for your time and consideration. I look forward to discussing how I can contribute to your organization.

Sincerely,

Your Name
"""

    return {
        "cover_letter": cover_letter.strip()
    }