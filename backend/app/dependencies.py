from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from jose import JWTError, jwt
from sqlalchemy.orm import Session

from app.database import get_db
from app.models import User
from app.services.security import SECRET_KEY, ALGORITHM

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/auth/login")


def get_current_user(
    token: str = Depends(oauth2_scheme),
    db: Session = Depends(get_db)
):
    print("Received Token:", token)

    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Invalid Credentials"
    )

    try:
        payload = jwt.decode(
            token,
            SECRET_KEY,
            algorithms=[ALGORITHM]
        )

        print("Decoded Payload:", payload)

        email = payload.get("sub")
        print("Email from token:", email)

        if email is None:
            raise credentials_exception

    except JWTError as e:
        print("JWT Error:", e)
        raise credentials_exception

    user = db.query(User).filter(User.email == email).first()

    print("User Found:", user)

    if user is None:
        raise credentials_exception

    return user