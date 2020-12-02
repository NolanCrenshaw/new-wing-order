import os


class Config:
    # Database Variables
    SQLALCHEMY_DATABASE_URI = os.environ.get("DATABASE_URL")
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_ECHO = True

    # Key Variables
    SECRET_KEY = os.environ.get("SECRET_KEY")
    GOOGLE_API_KEY = os.environ.get("GOOGLE_API_KEY")

    # Security Variables
    CORS_HEADER = "Content-type"
