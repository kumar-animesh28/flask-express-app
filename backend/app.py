from flask import Flask, jsonify
import random

app = Flask(__name__)

quotes = [
    "Stay hungry, stay foolish.",
    "Code is like humor. When you have to explain it, it’s bad.",
    "Simplicity is the soul of efficiency.",
    "Before software can be reusable it first has to be usable."
    "The best way to predict the future is to invent it.",
]

@app.route("/api/quote", methods=["GET"])
def get_quote():
    return jsonify({"quote": random.choice(quotes)})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
