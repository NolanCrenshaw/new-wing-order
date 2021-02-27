from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required, get_jwt_identity


from ..models import db, Rub

rub = Blueprint("rubs", __name__)


# Unprotected
@rub.route("/", methods=["GET"])
def get_rubs():
    # Fetch Rubs
    rub_objects = Rub.query.all()
    rubs = []
    for obj in rub_objects:
        rubs.append(obj.to_dict())
    return jsonify(rubs=rubs), 200


@rub.route("/", methods=["POST"])
@jwt_required()
def create_rub():
    # Create Rub
    rub_object = request.get_json()
    rub = Rub(
        name=rub_object["name"],
        heat=rub_object["heat"],
    )
    db.session.add(rub)
    db.session.commit()
    return jsonify(message="Rub successfully created"), 200


@rub.route("/delete", methods=["DELETE"])
@jwt_required()
def delete_rub():
    # Delete Rub
    data = request.get_json()
    rub = Rub.query.filter_by(id=data).first_or_404()
    db.session.delete(rub)
    db.session.commit()
    return jsonify(message="/rubs DELETE success"), 200
