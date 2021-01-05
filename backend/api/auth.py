from flask import Blueprint, request, jsonify, make_response
from flask_jwt_extended import create_access_token
import bcrypt


from ..models import db, Admin

auth = Blueprint("auth", __name__)


# Password Functions
def set_password(password):
    hashed_password = bcrypt.hashpw(
        password.encode("utf-*"), bcrypt.gensalt())
    return hashed_password


def verify_password(password, hashed_password):
    if bcrypt.checkpw(password.encode("utf-8"), hashed_password):
        return True
    else:
        return False


# CORS Preflight Header Handling
def cors_preflight_res():
    response = make_response()
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add("Access-Control-Allow-Headers", "*")
    response.headers.add("Access-Control-Allow-Methods", "*")
    return response


# CORS JSON Response Header Handling
# def corsify_res(response):
#     response.headers.add("Access-Control-Allow-Origin", "*")
#     return response


# Routes
@auth.route("/login", methods=["POST", "OPTIONS"])
def login():
    data = request.get_json()

    # CORS Preflight Handling
    if request.method == "OPTIONS":
        return cors_preflight_res()

    elif request.method == "POST":
        # Request Handling
        try:
            username = data["username"]
            password = data["password"]

            # Empty Value Validation
            if not username:
                return jsonify(message="Username Required"), 400
            elif not password:
                return jsonify(message="Password Required"), 400

            # Query Admin Obj
            admin = Admin.query.filter_by(username=username).first()

            # Empty Query Return Validation
            if not admin:
                return jsonify(message="Username Not Valid"), 400

            # Correct Password Validation
            verified = verify_password(password, admin.hashed_password)
            if not verified:
                return jsonify(message="Incorrect Password"), 403
            else:
                auth_token = create_access_token(
                    identity={"username": admin.username}
                )
            return jsonify(auth_token=auth_token), 200

        except Exception:
            return jsonify(message="Log In Failed"), 400
