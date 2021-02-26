from ..models import db, Event
from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required, get_jwt_identity

from ..models import db, Event


event = Blueprint("events", __name__)


# Unprotected
@event.route("/", methods=["GET"])
def get_events():
    # Fetch Events
    event_objects = Event.query.order_by(Event.start_time).all()
    events = []
    for obj in event_objects:
        events.append(obj.to_dict())
    return jsonify(events=events), 200


@event.route("/", methods=["POST"])
@jwt_required
def create_event():
    # Create Event
    event_object = request.get_json()
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
