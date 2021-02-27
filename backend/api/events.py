from ..models import db, Event
from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required, get_jwt_identity
import geocoder

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
@jwt_required()
def create_event():
    # Create Event
    event_object = request.get_json()
    g = geocoder.google(event_object["address"])
    lat = round(g.latlng[0], 5)
    lng = round(g.latlng[1], 5)
    if not lat or not lng:
        return jsonify(message="Address not valid"), 400
    event = Event(
        address=event_object["address"],
        location_name=event_object["location"],
        start_time=event_object["startTime"],
        end_time=event_object["endTime"],
        geo_lat=lat,
        geo_lng=lng,
    )
    db.session.add(event)
    db.session.commit()
    return jsonify(message="Event successfully created"), 200


@event.route("/delete", methods=["DELETE"])
@jwt_required()
def delete_event():
    # DELETE Event
    data = request.get_json()
    event = Event.query.filter_by(id=data).first_or_404()
    db.session.delete(event)
    db.session.commit()
    return jsonify(message="/event DELETE success"), 200
