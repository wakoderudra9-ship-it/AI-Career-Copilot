def generate_section_feedback(section_scores: dict):
    feedback = {}

    # Summary
    if section_scores["summary"] >= 8:
        feedback["summary"] = {
            "score": section_scores["summary"],
            "feedback": "Professional summary looks good."
        }
    else:
        feedback["summary"] = {
            "score": section_scores["summary"],
            "feedback": "Write a professional summary of 3-4 lines."
        }

    # Skills
    if section_scores["skills"] >= 8:
        feedback["skills"] = {
            "score": section_scores["skills"],
            "feedback": "Technical skills section is strong."
        }
    else:
        feedback["skills"] = {
            "score": section_scores["skills"],
            "feedback": "Add more relevant technical skills such as Git, AWS, PostgreSQL, REST APIs."
        }

    # Projects
    if section_scores["projects"] >= 8:
        feedback["projects"] = {
            "score": section_scores["projects"],
            "feedback": "Projects section looks impressive."
        }
    else:
        feedback["projects"] = {
            "score": section_scores["projects"],
            "feedback": "Include 2-3 real-world projects with measurable impact."
        }

    # Experience
    if section_scores["experience"] >= 8:
        feedback["experience"] = {
            "score": section_scores["experience"],
            "feedback": "Experience section is well written."
        }
    else:
        feedback["experience"] = {
            "score": section_scores["experience"],
            "feedback": "Add internships, freelance work or open-source contributions."
        }

    # Education
    if section_scores["education"] >= 8:
        feedback["education"] = {
            "score": section_scores["education"],
            "feedback": "Education section looks complete."
        }
    else:
        feedback["education"] = {
            "score": section_scores["education"],
            "feedback": "Mention degree, college and graduation year."
        }

    # Certifications
    if section_scores["certifications"] >= 8:
        feedback["certifications"] = {
            "score": section_scores["certifications"],
            "feedback": "Good certifications section."
        }
    else:
        feedback["certifications"] = {
            "score": section_scores["certifications"],
            "feedback": "Add certifications like AWS, Azure, Google Cloud or Coursera."
        }

    # Achievements
    if section_scores["achievements"] >= 8:
        feedback["achievements"] = {
            "score": section_scores["achievements"],
            "feedback": "Achievements section is excellent."
        }
    else:
        feedback["achievements"] = {
            "score": section_scores["achievements"],
            "feedback": "Include hackathons, awards, coding contests or achievements."
        }

    return feedback