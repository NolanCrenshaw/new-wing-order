# Package Imports
from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager

# Local Imports
from .config import Config
from .models import db
from .api.auth import auth

# App Declarations
app = Flask(__name__)
app.config.from_object(Config)
jwt = JWTManager(app)
db.init_app(app)
CORS(app)


# Blueprint Registrations
app.register_blueprint(auth, url_prefix="/api/auth")
app.register_blueprint(event, url_prefix="/api/event")
app.register_blueprint(menu_item, url_prefix="api/menu_item")


# Default Routing
@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def react_root(path):
    if path == "favicon.ico":
        return app.send_static_file("favicon.ico")
    return app.send_static_file("index.html")
