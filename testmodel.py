from google import genai

API_KEY = "AQ.Ab8RN6J157hZs6iIZpS1v4Xp0q8JTlTI2FNd0z7paPeoSCbHYw"

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