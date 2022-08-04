from flask import Flask
import flask
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def hello():
    return "Hello, World!"

@app.route('/users', methods=["GET"])
def users():
    print("users endpoint reached...")
    with open("users.json", "r") as f:
        data = json.load(f)
        data.append({
            "username": "Lender",
            "message": ["20 bucks"]
        })
        data.append({
            "username": "Debter",
            "message": ["I owe you 20$"]
        })
        return flask.jsonify(data)

if __name__ == "__main__":
    app.run("localhost", 6969)