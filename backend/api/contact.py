from flask import Blueprint, request, jsonify, make_response


contact = Blueprint("contact", __name__)


@contact.route("/", methods=["GET"])
def get_contact_keys():
    try:
        contact_vars = {
            EJS_SERVICE,
            EJS_TEMPLATE,
            EJS_USER
        }
        return jsonify(contact_vars=contact_vars), 200
    except Exception:
        return jsonify(message="Contact GET Request Failure"), 400
