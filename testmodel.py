from google import genai

API_KEY = "AQ.Ab8RN6KIfJNXTHc0MqOTT46Kv51zxnJiBefQuBzAjg9_FPyURQ"

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