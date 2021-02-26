import os
from dateutil.relativedelta import relativedelta


class Config:
    # Database Variables
    SQLALCHEMY_DATABASE_URI = os.environ.get("DATABASE_URL")
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_ECHO = True

    # Cors
    CORS_HEADER = "Content-Type"
    # CORS_RESOURCES = {r"*": {"origins": "*"}}

    # Key Variables
    SECRET_KEY = os.environ.get("SECRET_KEY")
    JWT_SECRET_KEY = os.environ.get("JWT_SECRET_KEY")
    GOOGLE_API_KEY = os.environ.get("GOOGLE_API_KEY")

    # Security Variables
    JWT_ACCESS_TOKEN_EXPIRES = relativedelta(hours=1)
