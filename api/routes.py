from fastapi import APIRouter, HTTPException
from api.schemas import ChatRequest, ChatResponse

from prompt.prompt import build_system_prompt
from AI.gemini import ask_gemini

router = APIRouter()

@router.get("/")
def home():
    return {
        "message": "Bienvenue dans l'API Assistant IA"
    }


@router.post("/chat", response_model=ChatResponse)
def chat(request: ChatRequest):
    try:
        # Reconstruit le prompt à chaque requête pour refléter l'état
        # actuel de la base (sinon les données restent figées au démarrage
        # du serveur et ne reflètent jamais les derniers ajouts/modifs).
        system_prompt = build_system_prompt()
        response = ask_gemini(system_prompt, request.question)
    except Exception as error:
        print(f"Gemini API error: {error}")
        raise HTTPException(
            status_code=503,
            detail="Le service Gemini est temporairement indisponible. Réessayez dans quelques instants.",
        ) from error

    return ChatResponse(response=response)