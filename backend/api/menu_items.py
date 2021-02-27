from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required, get_jwt_identity


from ..models import db, Menu_Item

menu_item = Blueprint("menu_items", __name__)


# Unprotected
@menu_item.route("/", methods=["GET"])
def get_menu_items():
    # Fetch Menu Items
    menu_item_objects = Menu_Item.query.all()
    menu_items = []
    for obj in menu_item_objects:
        menu_items.append(obj.to_dict())
    return jsonify(menu_items=menu_items), 200


@menu_item.route("/", methods=["POST"])
@jwt_required()
def create_menu_item():
    # Create Menu Item
    menu_item_object = request.get_json()
    menu_item = Menu_Item(
        name=menu_item_object["name"],
        description=menu_item_object["description"],
        price=menu_item_object["price"],
        item_type=menu_item_object["type"],
    )
    db.session.add(menu_item)
    db.session.commit()
    return jsonify(message="Menu Item successfully created"), 200


@menu_item.route("/delete", methods=["DELETE"])
@jwt_required()
def delete_menu_item():
    # Delete Menu Item
    data = request.get_json()
    menu_item = Menu_Item.query.filter_by(id=data).first_or_404()
    db.session.delete(menu_item)
    db.session.commit()
    return jsonify(message="/menu_items POST success"), 200
