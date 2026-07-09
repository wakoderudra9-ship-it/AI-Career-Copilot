from pydantic import BaseModel


class ProfileBase(BaseModel):
    phone: str | None = None
    location: str | None = None
    bio: str | None = None
    linkedin: str | None = None
    github: str | None = None
    portfolio: str | None = None


class ProfileCreate(ProfileBase):
    pass


class ProfileUpdate(ProfileBase):
    pass


class ProfileResponse(ProfileBase):
    id: int
    user_id: int

    class Config:
        from_attributes = True

class ProfileUpdate(ProfileCreate):
    pass