import flask
from flask import Blueprint, jsonify, request

app = flask.Flask('__main__')


@app.route('/', defaults ={'path': ''})
@app.route('/<path:path>')
def my_index(path):
    return flask.render_template("index.html", token="Hello Flask + React")

@app.route('/movies')
def request():
    request=[]
    request.append({'title' : 'avatar', 'rating': '9.1'})
    print(type(jsonify({"movies:" : request})))
    return jsonify({"movies:" : request})

app.run(debug=True)