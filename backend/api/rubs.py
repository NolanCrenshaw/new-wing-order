from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required, get_jwt_identity


from ..models import db, Rub

rub = Blueprint("rubs", __name__)


@rub.route("/", methods=["GET", "POST"])
@jwt_required()
def handle_rubs():

    # Fetch Rubs
    if request.method == "GET":
        rub_objects = Rub.query.all()
        rubs = []
        for obj in rub_objects:
            rubs.append(obj.to_dict())
        return jsonify(rubs=rubs), 200

    # Create Rub
    if request.method == "POST":
        rub_object = request.get_json()
        rub = Rub(
            name=rub["name"],
            heat=rub["heat"],
        )
        return jsonify(message="/rubs POST success"), 200


@rub.route("/delete", methods=["DELETE"])
@jwt_required()
def delete_rub():
    data = request.get_json()
    rub = Rub.query.filter_by(id=data["id"]).first()
    db.session.delete(rub)
    db.session.commit()
    return jsonify(message="/rubs DELETE success"), 200
