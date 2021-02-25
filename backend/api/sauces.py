from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required, get_jwt_identity


from ..models import db, Sauce

sauce = Blueprint("sauces", __name__)


@sauce.route("/", methods=["GET", "POST"])
@jwt_required()
def handle_sauces():

    # Fetch Sauces
    if request.method == "GET":
        sauce_objects = Sauce.query.all()
        sauces = []
        for obj in sauce_objects:
            sauces.append(obj.to_dict())
        return jsonify(sauces=sauces), 200

    # Create Sauce
    if request.method == "POST":
        sauce_object = request.get_json()
        sauce = Sauce(
            name=sauce["name"],
            heat=sauce["heat"],
        )
        return jsonify(message="/sauces POST success"), 200


@sauce.route("/delete", methods=["DELETE"])
@jwt_required()
def delete_sauce():
    data = request.get_json()
    sauce = Sauce.query.filter_by(id=data["id"]).first()
    db.session.delete(sauce)
    db.session.commit()
    return jsonify(message="/sauces DELETE success"), 200
