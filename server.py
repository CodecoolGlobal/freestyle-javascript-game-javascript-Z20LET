from flask import Flask, render_template, request, redirect, url_for
from psycopg2.errors import UniqueViolation
import json
import data_manager


app = Flask(__name__, template_folder='templates', static_folder='static')


@app.route("/")
def presentation():
    return render_template('presentation.html')


@app.route("/index")
def index():
    return render_template('index.html')


@app.route("/game")
def game():
    try:
        data_manager.add_user(request.args.get('username').upper())
    except UniqueViolation:
        pass
    return render_template('game.html')


@app.route("/scores")
def scores():
    scores_data = data_manager.list_scores()
    return render_template('scores.html', scores_data=scores_data)


@app.route("/scores/<username>")
def my_scores(username):
    user_scores = data_manager.get_user_scores(username)
    return render_template('my_scores.html', user_scores=user_scores)


@app.route("/scores/<string:userscore>/<string:username>", methods=['POST'])
def process_score(userscore, username):
    userscore = json.loads(userscore)
    username = json.loads(username)
    user_id = data_manager.get_user_id(username)
    data_manager.add_user_score(user_id.get('id'), userscore)
    return redirect(url_for('my_scores', username=username))


if __name__ == "__main__":
    app.run(
        debug=True,
        port=5000
    )

