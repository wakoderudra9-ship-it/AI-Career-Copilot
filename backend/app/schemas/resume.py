from pydantic import BaseModel


class ResumeResponse(BaseModel):
    id: int
    filename: str
    file_path: str
    user_id: int

    class Config:
        from_attributes = True


class ResumeAnalysisResponse(BaseModel):
    resume: ResumeResponse
    extracted_text: str
    analysis: dict