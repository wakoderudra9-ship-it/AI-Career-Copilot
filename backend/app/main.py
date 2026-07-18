from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database import Base, engine
from app.models import User, Profile, Resume

from app.routes.auth import router as auth_router
from app.routes.profile import router as profile_router
from app.routes.resume import router as resume_router
from app.routes.job import router as job_router
from app.routes.cover_letter import router as cover_letter_router
from app.routes.interview import router as interview_router
from app.routes.mock_interview import router as mock_interview_router
from app.routes.gemini_test import router as gemini_router
from app.routes.career_roadmap import router as career_roadmap_router

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="AI Career Copilot",
    version="1.0.0"
)

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router)
app.include_router(profile_router)
app.include_router(resume_router)
app.include_router(job_router)
app.include_router(cover_letter_router)
app.include_router(interview_router)
app.include_router(mock_interview_router)
app.include_router(gemini_router)
app.include_router(career_roadmap_router)

@app.get("/")
def root():
    return {
        "message": "Database Connected Successfully"
    }