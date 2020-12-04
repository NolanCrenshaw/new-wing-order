# Package Imports
from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager

# Local Imports
from .config import Config
from .models import db

# App Declarations
app = Flask(__name__)
app.config.from_object(Config)
jwt = JWTManager(app)
db.init_app(app)
CORS(app)


# Default Routing
@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def react_root(path):
    if path == "favicon.ico":
        return app.send_static_file("favicon.ico")
    return app.send_static_file("index.html")
