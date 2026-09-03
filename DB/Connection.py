import psycopg2

from Config import (
    DB_HOST,
    DB_PORT,
    DB_NAME,
    DB_USER,
    DB_PASSWORD
    
)
def get_connection():
    return psycopg2.connect(
        host=DB_HOST,
        port=DB_PORT,
        dbname=DB_NAME,
        user=DB_USER,
        password=DB_PASSWORD
    )
conn = get_connection()

# try :
#     conn = get_connection()
#     print("Connection to the database was successful!")
#     conn.close()
# except Exception as e:
#     print(f"Error occurred while connecting to the database: {e}")