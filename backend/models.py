from flask_sqlalchemy import SQLAlchemy
from datetime import datetime


db = SQLAlchemy()


class Admin(db.Model):
    __tablename__ = "admins"

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(16), nullable=False, unique=True)
    email = db.Column(db.String(40), nullable=False, unique=True)
    hashed_password = db.Column(db.Binary(100), nullable=False)
    firstname = db.Column(db.String(16), nullable=False)
    lastname = db.Column(db.String(40), nullable=False)
    date_added = db.Column(
        db.DateTime(timezone=True), nullable=False, default=datetime.utcnow
    )

    def to_safe_object(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            "firstname": self.firstname,
            "lastname": self.lastname,
            "date_added": self.date_added,
        }


class Event(db.Model):
    __tablename__ = "events"

    id = db.Column(db.Integer, primary_key=True)
    address = db.Column(db.String(100), nullable=False)
    geo_lat = db.Column(db.Float, nullable=False)
    geo_lng = db.Column(db.Float, nullable=False)
    location_name = db.Column(db.String(40), nullable=False)
    start_time = db.Column(db.String, nullable=False)
    end_time = db.Column(db.String, nullable=False)
    date_added = db.Column(
        db.DateTime(timezone=True), nullable=False, default=datetime.utcnow
    )

    def to_dict(self):
        return {
            "id": self.id,
            "address": self.address,
            # "geo_lat": self.geo_lat,
            # "geo_lng": self.geo_lng,
            "location_name": self.location_name,
            "start_time": self.start_time,
            "end_time": self.end_time,
            "date_added": self.date_added,
        }


class Menu_Item(db.Model):
    __tablename__ = "menu_items"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False, unique=True)
    description = db.Column(db.String(255), nullable=True)
    price = db.Column(db.String(16), nullable=True)
    item_type = db.Column(db.String(20), nullable=False)
    date_added = db.Column(
        db.DateTime(timezone=True), nullable=False, default=datetime.utcnow
    )

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "price": self.price,
            "item_type": self.item_type,
            "date_added": self.date_added,
        }


class Sauce(db.Model):
    __tablename__ = "sauces"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False, unique=True)
    heat = db.Column(db.Integer, nullable=True)
    date_added = db.Column(
        db.DateTime(timezone=True), nullable=False, default=datetime.utcnow
    )

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "heat": self.heat,
            "date_added": self.date_added,
        }


class Rub(db.Model):
    __tablename__ = "rubs"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False, unique=True)
    heat = db.Column(db.Integer, nullable=True)
    date_added = db.Column(
        db.DateTime(timezone=True), nullable=False, default=datetime.utcnow
    )

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "heat": self.heat,
            "date_added": self.date_added,
        }
