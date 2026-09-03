from google import genai

from Config import (
    GEMINI_API_KEY,
    MODEL_NAME
)

client = genai.Client(api_key=GEMINI_API_KEY)


def ask_gemini(system_prompt, question):

    response = client.models.generate_content(
        model=MODEL_NAME,
        contents=[
            system_prompt,
            question
        ]
    )

    return response.text