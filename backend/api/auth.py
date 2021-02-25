from flask import Blueprint, request, jsonify, make_response
from flask_jwt_extended import (
    create_access_token,
    jwt_required,
    get_jwt_identity
)
from flask_cors import cross_origin
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


@auth.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    username = data["username"]
    password = data["password"]

    admin = Admin.query.filter_by(username=username).first()
    if not admin:
        return jsonify(message="Username Not Valid"), 401

    verified = verify_password(password, admin.hashed_password)
    if not verified:
        return jsonify(message="Incorrect Password"), 401
    else:
        auth_token = create_access_token(admin.username)
    return jsonify(auth_token=auth_token), 200


@auth.route("/", methods=["GET"])
@jwt_required()
def check_token():
    auth_token = get_jwt_identity()
    admin = Admin.query.filter_by(username=auth_token).first()
    safe_admin = admin.to_safe_object()
    return jsonify(admin=safe_admin), 200
