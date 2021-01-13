import os
import json
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def index():
    title = "Camila Ribeiro"
    index = "#index"
    projects = "#projects"
    about = "#about"
    contact = "#contact"
    data = []
    with open("data/projects.json", "r") as json_data:
        data = json.load(json_data)
    return render_template("index.html", title=title, index=index, projects=projects, about=about, contact=contact, portifolio=data)

@app.route("/projects/<project_name>")
def project_detail(project_name):
    project = {}
    
    with open("data/projects.json", "r") as json_data:
        data = json.load(json_data)
        for obj in data:
            if obj["url"] == project_name:
                project = obj
    return render_template("project-detail.html", project=project)

@app.route("/about")
def about():
    return render_template("about.html")


if __name__ == "__main__":
    app.run(host=os.environ.get("IP"),
        port=int(os.environ.get('PORT', 8000)),
        debug=True)