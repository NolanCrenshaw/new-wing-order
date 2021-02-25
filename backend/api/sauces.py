from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required, get_jwt_identity


from ..models import db, Sauce

sauce = Blueprint("sauces", __name__)


@sauce.route("/", methods=["GET"])
@jwt_required()
def get_sauces():

    if request.method == "GET":
        sauce_objects = Sauce.query.all()
        sauces = []
        for obj in sauce_objects:
            sauces.append(obj.to_dict())
        return jsonify(sauces=sauces), 200

    if request.method == "POST":
        sauce_object = request.get_json()
        sauce = Sauce(
            name=sauce["name"],
            heat=sauce["heat"],
        )
        return jsonify(message="Sauce POST Request Successful"), 200
