from prompt.prompt import build_system_prompt
from AI.gemini import ask_gemini

def start_chat():

    system_prompt = build_system_prompt()

    print("=" * 60)
    print("Assistant IA")
    print("Tape 'exit' pour quitter.")
    print("=" * 60)

    while True:

        question = input("\nVous : ")

        if question.lower() == "exit":
            break

        try:

            response = ask_gemini(
                system_prompt,
                question
            )



            print("\nAssistant :")
            print(response)

        except Exception as e:
            print(e)