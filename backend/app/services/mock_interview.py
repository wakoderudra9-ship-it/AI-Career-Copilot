def evaluate_answer(question: str, answer: str):

    technical_score = 5
    communication_score = 5
    confidence_score = 5

    strengths = []
    weaknesses = []
    suggestions = []

    # -----------------------
    # Answer Length
    # -----------------------

    if len(answer.split()) > 30:
        communication_score += 2
        strengths.append("Detailed explanation.")
    else:
        weaknesses.append("Answer is too short.")
        suggestions.append("Provide a more detailed explanation.")

    # -----------------------
    # Technical Keywords
    # -----------------------

    keywords = [
        "Python",
        "FastAPI",
        "SQL",
        "Docker",
        "JWT",
        "API",
        "Database",
        "Authentication"
    ]

    keyword_count = 0

    for keyword in keywords:
        if keyword.lower() in answer.lower():
            keyword_count += 1

    technical_score += keyword_count

    if keyword_count >= 3:
        strengths.append("Good use of technical concepts.")
    else:
        weaknesses.append("Missing technical details.")
        suggestions.append("Include more technical concepts.")

    # -----------------------
    # Confidence
    # -----------------------

    confidence_words = [
        "implemented",
        "developed",
        "designed",
        "built",
        "optimized",
        "created"
    ]

    confidence_hits = 0

    for word in confidence_words:
        if word.lower() in answer.lower():
            confidence_hits += 1

    confidence_score += confidence_hits

    if confidence_hits >= 2:
        strengths.append("Shows confidence while answering.")
    else:
        weaknesses.append("Answer lacks confidence.")
        suggestions.append(
            "Use stronger action verbs like 'implemented' or 'designed'."
        )

    technical_score = min(technical_score, 10)
    communication_score = min(communication_score, 10)
    confidence_score = min(confidence_score, 10)

    overall_score = round(
        (
            technical_score +
            communication_score +
            confidence_score
        ) / 3
    )

    return {
        "technical_score": technical_score,
        "communication_score": communication_score,
        "confidence_score": confidence_score,
        "overall_score": overall_score,
        "strengths": strengths,
        "weaknesses": weaknesses,
        "suggestions": suggestions
    }