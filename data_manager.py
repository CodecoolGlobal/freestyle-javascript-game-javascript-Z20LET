from psycopg2 import sql
import database_connection


# @database_connection.connection_handler
# def insert_data(cursor):
#     query = """
#         INSERT INTO users(name) VALUES ('Tom');
#     """
#     cursor.execute(query)
#
# insert_data()
#
# @database_connection.connection_handler
# def insert_score(cursor):
#     query = f"""
#         INSERT INTO scores(users_id, score) VALUES (1, 55);
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
