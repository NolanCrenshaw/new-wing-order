import os
from ..models import db, Event
from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required, get_jwt_identity

from ..models import db, Event

key = os.environ.get("GOOGLE_API_KEY")


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
        print("event object: ", event_object)
        event = Event(
            address=event_object["address"],
            location_name=event_object["location"],
            # geo_lat=event_object["geoLat"],
            # geo_lng=event_object["geoLng"],
            start_time=event_object["startTime"],
            end_time=event_object["endTime"],
        )
        db.session.add(event)
        db.session.commit()
        return jsonify(message="Event POST Request Successful"), 200
    except Exception:
        return jsonify(message="Event POST Request Failure"), 400


@event.route("/key")
def get_key():
    try:
        return jsonify(key=key), 200
    except Exception:
        return jsonify(message="EVENT GET Request Failure"), 400
