from DB.Connection import conn

def get_all_data():
    cursor = conn.cursor()

    cursor.execute("""
        SELECT tablename
        FROM pg_tables
        WHERE schemaname = 'public';
    """)

    tables = [row[0] for row in cursor.fetchall()]

    data = {}

    for table in tables:
        cursor.execute(f'SELECT * FROM "{table}"')

        columns = [desc[0] for desc in cursor.description]

        data[table] = [
            dict(zip(columns, row))
            for row in cursor.fetchall()
        ]

    cursor.close()

    return data


# if __name__ == "__main__":
#     all_data = get_all_data()

#     for table_name, rows in all_data.items():
#         print(f"\n===== {table_name} =====")
#         for row in rows:
#             print(row)
