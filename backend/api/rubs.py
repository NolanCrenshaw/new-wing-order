from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required, get_jwt_identity


from ..models import db, Rub

rub = Blueprint("rubs", __name__)


@rub.route("/", methods=["GET"])
def get_rubs():
    try:
        rub_objects = Rub.query.all()
        rubs = []
        for obj in rub_objects:
            rubs.append(obj.to_dict())
        return jsonify(rubs=rubs), 200
    except Exception:
        return jsonify(message="rub GET Request Failure"), 400


@rub.route("/", methods=["POST"])
@jwt_required
def create_rub():
    try:
        rub_object = request.get_json()
        rub = Rub(
            name=rub["name"],
            heat=rub["heat"],
        )
        return jsonify(message="rub POST Request Successful"), 200
    except Exception:
        return jsonify(message="rub POST Request Failure"), 400
