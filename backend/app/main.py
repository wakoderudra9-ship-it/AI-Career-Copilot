from fastapi import FastAPI
from app.database import Base, engine
from app.models import User, Profile
from app.routes.auth import router as auth_router
from app.routes.profile import router as profile_router

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="AI Career Copilot",
    version="1.0.0"
)

app.include_router(auth_router)
app.include_router(profile_router)

@app.get("/")
def root():
    return {
        "message": "Database Connected Successfully"
    }