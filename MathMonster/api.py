from flask import Flask
from flask_cors import CORS
import json

f1 = open("questions.json", "rb")
j1 = json.loads(f1.read())

app1 = Flask(__name__)
CORS(app1)

@app1.route("/")
def serve():
    return j1

if __name__ == "__main__":
    app1.run()

