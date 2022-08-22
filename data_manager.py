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