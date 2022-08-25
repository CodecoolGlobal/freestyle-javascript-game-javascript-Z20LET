from psycopg2 import sql
import database_connection


@database_connection.connection_handler
def add_user(cursor, username):
    query = """
    INSERT INTO users(name) VALUES(%(un)s);"""
    cursor.execute(query, {'un': username})


@database_connection.connection_handler
def list_scores(cursor):
    query = """
    SELECT name, score, time
    FROM users
    LEFT JOIN scores on users.id=scores.users_id
    WHERE score is not Null
    GROUP BY users.id, scores.score, scores.time
    ORDER BY score DESC
    LIMIT 5;
    """
    cursor.execute(query)
    return cursor.fetchall()
#
# @database_connection.connection_handler
# def delete(cursor):
#     query = """
#     delete from users where name is Null;"""
#     cursor.execute(query)
# #
# delete()
# @database_connection.connection_handler
# def insert_data(cursor):
#     query = """
#         INSERT INTO users(name) VALUES ('Morty');
#     """
#     cursor.execute(query)
#
# insert_data()

#
# @database_connection.connection_handler
# def insert_score(cursor):
#     query = f"""
#         INSERT INTO scores(users_id, score) VALUES (17, 111);
#     """
#     cursor.execute(query)
#
# insert_score()