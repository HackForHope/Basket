import flask
from flask import Blueprint, jsonify, request
from sql import *


app = flask.Flask('__main__')
main = Blueprint('main', __name__)
mycursor.execute("USE basketdata")


@app.route('/', defaults ={'path': ''})
@app.route('/<path:path>')
def _index(path):
    return flask.render_template("index.html", token="Hello Flask + React")

@app.route('/order',methods=['POST','GET'])
def _main():
    if request.method != "POST":
        if Request==True:
            orders=get_all_orders()
            print(type(jsonify({"orders:" : orders})))
            return jsonify({"orders:" : orders})
        else:
            helpers=get_all_helpers()
            print(type(jsonify({"helpers:" : helpers})))
            return jsonify({"helpers:" : helpers})
    else:
        if helper==False:
            userID=request.get_json()
            add_to_helper(userID)
            return 'Done', 201
        else:
            userID=request.get_json()
            delete_from_helper(userID)
            return 'Done', 201

@app.route('/signup', methods=['POST'])
def _register():
    register_data = request.get_json()
        #"[name, email, password]"
        # "{key : value}"
        # "{key : array}"
    register(register_data[0], register_data[1], register_data[2])
    print(get_all_users())
    return 'Done', 201

@app.route('/active-request', methods=['GET'])
def _activeRequest():
    request=[]
    get_active_request()
    request.append({'title' : 'REQUEST', 'rating': '9.1'})
    return jsonify({"movies:" : request})


@app.route('/active-helper', methods=['GET'])
def _activeHelper():
    request=[]
    get_active_request()
    print(type(get_active_request))
    request.append({'title' : 'HELPER', 'rating': '9.1'})
    return jsonify({"movies:" : request})

# @app.route('/place-new-order', methods=['POST','GET'])
# def _placeNewOrder():
#     register_data = request.get_json()
#     register_data = []
#     register(register_data[0], register_data[1], register_data[2])
#     print(get_all_users())
#     return 'Done', 201


# @app.route('/shop', methods=['POST'])
# def _add_to_cart():
#     cart_data = [request.form["item_id"],request.form["user_id"],request.form["num"],request.form["price"]]
#     add_to_cart(cart_data[0], cart_data[1], cart_data[2],cart_data[w])
#     return 'Done', 201

# @app.route('/profile/account')
# def _display():
#     user=get_user(userID)
#     print(type(jsonify({"user:" : user})))
#     return jsonify({"user:" : user})



# app.register_blueprint(main)

app.run(debug=True)
con.close()
