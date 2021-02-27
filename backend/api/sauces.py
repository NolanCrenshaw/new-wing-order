from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required, get_jwt_identity


from ..models import db, Sauce

sauce = Blueprint("sauces", __name__)


# Unprotected
@sauce.route("/", methods=["GET"])
def get_sauces():
    # Fetch Sauces
    sauce_objects = Sauce.query.all()
    sauces = []
    for obj in sauce_objects:
        sauces.append(obj.to_dict())
    return jsonify(sauces=sauces), 200


@sauce.route("/", methods=["POST"])
@jwt_required()
def create_sauce():
    # Create Sauce
    sauce_object = request.get_json()
    sauce = Sauce(
        name=sauce_object["name"],
        heat=sauce_object["heat"],
    )
    db.session.add(sauce)
    db.session.commit()
    return jsonify(message="Sauce successfully created"), 200


@sauce.route("/delete", methods=["DELETE"])
@jwt_required()
def delete_sauce():
    # Delete Sauce
    data = request.get_json()
    sauce = Sauce.query.filter_by(id=data).first_or_404()
    db.session.delete(sauce)
    db.session.commit()
    return jsonify(message="/sauces DELETE success"), 200
