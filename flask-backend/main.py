import flask
from flask import Blueprint, jsonify, request
from sql import *
import secret

app = flask.Flask('__main__')
main = Blueprint('main', __name__)

@app.route('/', defaults ={'path': ''})
@app.route('/<path:path>')
def _index(path):
    return flask.render_template("index.html", token="Hello Flask + React")

@app.route('/order')
def _order():
    request=[]
    request.append({'title' : 'avatar', 'rating': '9.1'})
    print(type(jsonify({"movies:" : request})))
    return jsonify({"movies:" : request})

@app.route('/register', methods=['POST'])
def _register():
    register_data = request.get_json()
    print(register_data[0],register_data[1], register_data[2])
    # register(register_data[0], (int)(register_data[1]), register_data[2])
    return 'Done', 201



# app.register_blueprint(main)
app.run(debug=True)
con.close()