import os
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/portifolio")
def portifolio():
    return render_template("portifolio.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/contact")
def contact():
    return render_template("contact.html")

if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
        port=int(os.environ.get('PORT', 5000)),
        debug=True)