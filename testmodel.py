import os
from dotenv import load_dotenv
from google import genai

load_dotenv()
API_KEY = os.environ.get("GEMINI_API_KEY")

client = genai.Client(api_key=API_KEY)

print("\nModèles testés :\n")

for model in client.models.list():
    actions = getattr(model, "supported_actions", [])

    if "generateContent" not in actions:
        continue

    try:
        response = client.models.generate_content(
            model=model.name,
            contents="Dis juste OK"
        )
        print(f" {model.name}")

    except Exception as e:
        print(f" {model.name}")
        print(f"   {e}")