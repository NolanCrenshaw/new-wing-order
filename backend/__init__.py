# Package Imports
from flask import Flask
from flask_cors import CORS

# Local Imports
from .config import Config

# App Declarations
app = Flask(__name__)
app.config.from_object(Config)
CORS(app)


# Default Routing
@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def react_root(path):
    if path == "favicon.ico":
        return app.send_static_file("favicon.ico")
    return app.send_static_file("index.html")
