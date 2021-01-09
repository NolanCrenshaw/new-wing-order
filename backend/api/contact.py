import os
from flask import Blueprint, request, jsonify, make_response

EJS_SERVICE = os.environ.get("EMAILJS_SERVICE_ID")
EJS_TEMPLATE = os.environ.get("EMAILJS_TEMPLATE_ID")
EJS_USER = os.environ.get("EMAILJS_USER_ID")


contact = Blueprint("contact", __name__)


@contact.route("/", methods=["GET"])
def get_contact_keys():
    try:
        return jsonify(
            service=EJS_SERVICE,
            template=EJS_TEMPLATE,
            user=EJS_USER
        ), 200
    except Exception:
        return jsonify(message="Contact GET Request Failure"), 400
