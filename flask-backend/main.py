import flask
from flask import Blueprint, jsonify, request
from sql import *
import secret

app = flask.Flask('__main__')
main = Blueprint('main', __name__)


@app.route('/', defaults ={'path': ''})
@app.route('/<path:path>')
def my_index(path):
    return flask.render_template("index.html", token="Hello Flask + React")

@app.route('/order')
def order():
    request=[]
    request.append({'title' : 'avatar', 'rating': '9.1'})
    print(type(jsonify({"movies:" : request})))
    return jsonify({"movies:" : request})

@app.route('/register', methods=['POST'])
def register():
    register_data = request.get_json()
    # sql = "INSERT INTO users (name, google_id) VALUES (%s, %s);"
    val = (register_data['name'],register_data['googleid'])
    mycursor.execute(sql,val)

    return 'Done', 201

# app.register_blueprint(main)
app.run(debug=True)
con.close()
