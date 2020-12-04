from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required, get_jwt_identity


from ..models import db, Event

event = Blueprint("events", __name__)


@event.route("/", methods=["GET"])
def get_events():
    try:
        event_objects = Event.query.order_by(Event.start_time).all()
        events = []
        for obj in event_objects:
            events.append(obj.to_dict())
        return jsonify(events=events), 200
    except Exception:
        return jsonify(message="Event GET Request Failure"), 400


@event.route("/", methods=["POST"])
@jwt_required
def create_event():
    try:
        event_object = request.get_json()
        event = Event(
            address=event_object["address"],
            location_name=event_object["locationName"],
            start_time=event_object["startTime"],
            end_time=event_object["endTime"],
        )
        return jsonify(message="Event POST Request Successful"), 200
    except Exception:
        return jsonify(message="Event POST Request Failure"), 400