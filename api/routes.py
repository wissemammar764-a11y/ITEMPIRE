from fastapi import APIRouter, HTTPException
from api.schemas import ChatRequest, ChatResponse

from prompt.prompt import build_system_prompt
from AI.gemini import ask_gemini

router = APIRouter()

system_prompt = build_system_prompt()

@router.get("/")
def home():
    return {
        "message": "Bienvenue dans l'API Assistant IA"
    }


@router.post("/chat", response_model=ChatResponse)
def chat(request: ChatRequest):
    try:
        response = ask_gemini(system_prompt, request.question)
    except Exception as error:
        print(f"Gemini API error: {error}")
        raise HTTPException(
            status_code=503,
            detail="Le service Gemini est temporairement indisponible. Réessayez dans quelques instants.",
        ) from error

    return ChatResponse(response=response)