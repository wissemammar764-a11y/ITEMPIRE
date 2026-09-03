import os
from dotenv import load_dotenv

load_dotenv()

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
MODEL_NAME = "gemini-flash-latest"

DB_HOST = "127.0.0.1"
DB_PORT = "5432"
DB_NAME = "ITEMPIRE"
DB_USER = "postgres"
DB_PASSWORD = "123456789"
EMBEDDING_MODEL = "all-MiniLM-L6-v2"

