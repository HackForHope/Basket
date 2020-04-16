import flask

app = flask.Flask('__main__')

@app.route('/', defaults ={'path': ''})
@app.route('/<path:path>')
def my_index(path):
    return flask.render_template("index.html", token="Hello Flask + React")

app.run(debug=True)