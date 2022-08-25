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


@database_connection.connection_handler
def get_user_scores(cursor, username):
    query = """
    SELECT name, score, time
    FROM users
    INNER JOIN scores s on users.id = s.users_id
    WHERE name ILIKE %(un)s
    ORDER BY score DESC;
    """
    cursor.execute(query, {'un': username})
    return cursor.fetchall()


@database_connection.connection_handler
def get_user_id(cursor, sername):
    query = """
    SELECT id FROM users WHERE name ILIKE %(un)s;"""
    cursor.execute(query, {'un': username})
    return cursor.fetchone()


@database_connection.connection_handler
def add_user_score(cursor, user_id, score):
    query = """
    INSERT INTO scores(users_id, score) VALUES(%(u_id)s, %(sc)s);"""
    cursor.execute(query)

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

@database_connection.connection_handler
def list_sores(cursor):
    query = f"""
    SELECT name, score, time
    FROM users
    LEFT JOIN scores on users.id=scores.users_id
    GROUP BY users.id, scores.score, scores.time
    """
    cursor.execute(query)
    return cursor.fetchall()
