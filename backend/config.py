import os
from dateutil.relativedelta import relativedelta


class Config:
    # Database Variables
    SQLALCHEMY_DATABASE_URI = os.environ.get("DATABASE_URL")
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_ECHO = True

    # Key Variables
    SECRET_KEY = os.environ.get("SECRET_KEY")
    JWT_SECRET_KEY = os.environ.get('JWT_SECRET_KEY')

    # Security Variables
    CORS_HEADER = "Content-type"
    JWT_ACCESS_TOKEN_EXPIRES = relativedelta(hours=1)
