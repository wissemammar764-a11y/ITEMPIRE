import React, { useState } from "react";
import { askAI } from "../services/aiService";

const SuggestionIcon = ({ children }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="16"
    height="16"
  >
    {children}
  </svg>
);

/* ============ SPINNER — composant dédié, bien visible ============ */
const Spinner = ({ label = "L'assistant réfléchit..." }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "28px 0",
      gap: "16px",
    }}
  >
    <style>
      {`
        @keyframes ai-spin-ring { 100% { transform: rotate(360deg); } }
        @keyframes ai-dash {
          0%   { stroke-dasharray: 1, 150; stroke-dashoffset: 0; }
          50%  { stroke-dasharray: 90, 150; stroke-dashoffset: -35; }
          100% { stroke-dasharray: 90, 150; stroke-dashoffset: -124; }
        }
        @keyframes ai-pulse-dot {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
          40% { transform: scale(1); opacity: 1; }
        }
        @keyframes ai-fade-in {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}
    </style>

    {/* Anneau principal */}
    <svg
      width="54"
      height="54"
      viewBox="0 0 50 50"
      style={{ animation: "ai-spin-ring 1.4s linear infinite" }}
    >
      <circle cx="25" cy="25" r="20" fill="none" stroke="#F1E9DE" strokeWidth="5" />
      <circle
        cx="25"
        cy="25"
        r="20"
        fill="none"
        stroke="#FF9F43"
        strokeWidth="5"
        strokeLinecap="round"
        style={{ animation: "ai-dash 1.4s ease-in-out infinite" }}
      />
    </svg>

    {/* 3 points qui pulsent */}
    <div style={{ display: "flex", gap: "6px" }}>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            backgroundColor: "#FF9F43",
            display: "inline-block",
            animation: `ai-pulse-dot 1.2s ease-in-out ${i * 0.2}s infinite`,
          }}
        />
      ))}
    </div>

    <p
      style={{
        color: "#6B7280",
        fontSize: "14px",
        fontWeight: 500,
        margin: 0,
      }}
    >
      {label}
    </p>
  </div>
);

/* ============ Extraction défensive du texte de réponse ============ */
const extractAnswerText = (response) => {
  if (response == null) return "";
  if (typeof response === "string") return response;

  if (typeof response === "object") {
    const candidate =
      response.answer ??
      response.response ??
      response.message ??
      response.text ??
      response.data?.answer ??
      response.data?.response ??
      response.data?.message ??
      response.data?.text ??
      response.data;

    if (typeof candidate === "string") return candidate;
    if (candidate != null) {
      try {
        return JSON.stringify(candidate, null, 2);
      } catch {
        return String(candidate);
      }
    }
    try {
      return JSON.stringify(response, null, 2);
    } catch {
      return String(response);
    }
  }

  return String(response);
};

const Ai = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const askAssistant = async (value = question) => {
    const trimmedQuestion = value.trim();

    if (!trimmedQuestion || loading) {
      return;
    }

    console.log("Question envoyée :", trimmedQuestion);

    setLoading(true);
    setError("");
    setAnswer("");

    try {
      const response = await askAI(trimmedQuestion);

      console.log("Réponse brute reçue de askAI :", response);
      console.log("Type de la réponse :", typeof response);

      const text = extractAnswerText(response);

      console.log("Texte extrait pour affichage :", JSON.stringify(text));

      if (!text) {
        console.warn(
          "⚠️ askAI a renvoyé une valeur vide/undefined. Vérifie que le backend renvoie bien { response: '...' } sur /chat."
        );
      }

      setAnswer(text);
    } catch (err) {
      console.error("AI API error :", err);

      if (err.response) {
        console.error("Status :", err.response.status);
        console.error("Data :", err.response.data);
      }

      setError(
        err.response?.data?.detail ||
          "Impossible de contacter l'assistant. Vérifiez que FastAPI est lancé sur le port 8000."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuestion(suggestion);
    askAssistant(suggestion);
  };

  return (
    <div>
      <div className="ai-hero">

        {/* ORBE IA */}
        <div className="ai-orb"></div>

        {/* MESSAGE D'ACCUEIL */}
        <p className="hello">
          Bonjour, wissem
        </p>

        <h2>
          Comment puis-je vous aider aujourd'hui ?
        </h2>

        {/* ZONE DE QUESTION */}
        <div className="ai-input-card">

          <textarea
            id="ai-question"
            rows={1}
            placeholder="Posez une question sur vos étudiants, sessions, paiements…"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                askAssistant();
              }
            }}
          />

          <div className="ai-input-row">

            {/* CHIP */}
            <div className="ai-chip">

              <svg
                width={13}
                height={13}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
              >
                <path d="M12 3v4" />
                <path d="M12 17v4" />
                <path d="M3 12h4" />
                <path d="M17 12h4" />
                <circle cx={12} cy={12} r={3.4} />
              </svg>

              Analyse approfondie
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >

              {/* BOUTON FICHIER */}
              <div
                className="ai-icon-btn"
                title="Joindre un fichier"
              >
                <svg
                  width={15}
                  height={15}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.5 12.5 21a5 5 0 0 1-7-7l8-8a3.5 3.5 0 0 1 5 5l-8 8a2 2 0 0 1-3-3l7.5-7.5" />
                </svg>
              </div>

              {/* BOUTON ENVOYER */}
              <button
                type="button"
                className="ai-icon-btn send"
                id="ai-send"
                onClick={() => askAssistant()}
                disabled={loading}
                title="Envoyer"
              >
                {loading ? (
                  <svg
                    width={15}
                    height={15}
                    viewBox="0 0 24 24"
                    style={{ animation: "ai-spin-ring 1s linear infinite" }}
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="9"
                      fill="none"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      style={{ animation: "ai-dash 1.4s ease-in-out infinite" }}
                    />
                  </svg>
                ) : (
                  <svg
                    width={15}
                    height={15}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M13 6l6 6-6 6" />
                  </svg>
                )}
              </button>

            </div>
          </div>
        </div>

        {/* SUGGESTIONS */}
        <div className="ai-suggestions">

          {/* SUGGESTION 1 */}
          <button
            className="ai-suggest-card"
            onClick={() =>
              handleSuggestionClick(
                "Résume les paiements du mois en cours."
              )
            }
          >
            <span className="ai-s-icon">
              <SuggestionIcon>
                <circle cx="12" cy="12" r="8" />

                <text
                  x="12"
                  y="16"
                  textAnchor="middle"
                  fontSize="10"
                  fontWeight="700"
                  fill="white"
                  stroke="none"
                >
                  $
                </text>
              </SuggestionIcon>
            </span>

            <strong>
              Résumer les paiements
            </strong>

            <span>
              Obtenir un récapitulatif des règlements reçus ce mois-ci.
            </span>
          </button>

          {/* SUGGESTION 2 */}
          <button
            className="ai-suggest-card"
            onClick={() =>
              handleSuggestionClick(
                "Génère un message de rappel pour les étudiants en retard de paiement."
              )
            }
          >
            <span className="ai-s-icon">
              <SuggestionIcon>
                <path d="M6 4.5h5.5l1.2 3.3-2 1.7a10.3 10.3 0 0 0 4.8 4.8l1.7-2 3.3 1.2V19a1.5 1.5 0 0 1-1.6 1.5C11.5 20 4 12.5 4.5 6.1A1.5 1.5 0 0 1 6 4.5Z" />
              </SuggestionIcon>
            </span>

            <strong>
              Rédiger un rappel
            </strong>

            <span>
              Créer un message pour les étudiants en retard de paiement.
            </span>
          </button>

          {/* SUGGESTION 3 */}
          <button
            className="ai-suggest-card"
            onClick={() =>
              handleSuggestionClick(
                "Compare le taux de présence entre les sessions de ce mois."
              )
            }
          >
            <span className="ai-s-icon">
              <SuggestionIcon>
                <circle cx="12" cy="12" r="8.2" />
                <path d="m8.5 12.3 2.3 2.3 4.7-5" />
              </SuggestionIcon>
            </span>

            <strong>
              Comparer les présences
            </strong>

            <span>
              Analyser le taux de présence entre plusieurs sessions.
            </span>
          </button>

        </div>

        {/* ZONE DE CHARGEMENT / REPONSE / ERREUR — juste sous l'input+suggestions */}
        {(loading || answer || error) && (
          <div
            className="ai-answer-wrap"
            style={{
              display: "block",
              visibility: "visible",
              opacity: 1,
              position: "static",
              width: "100%",
              maxWidth: "100%",
              marginTop: "30px",
              boxSizing: "border-box",
              animation: "ai-fade-in 0.25s ease-out",
            }}
          >

            <div
              className="ai-answer"
              id="ai-answer"
              style={{
                display: "block",
                visibility: "visible",
                opacity: 1,
                width: "100%",
                padding: "25px",
                backgroundColor: "#FFFFFF",
                border: "1px solid #E5E7EB",
                borderRadius: "16px",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.08)",
                boxSizing: "border-box",
              }}
            >

              {/* HEADER REPONSE */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "20px",
                  paddingBottom: "15px",
                  borderBottom: "1px solid #EEEEEE",
                }}
              >

                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "50%",
                    backgroundColor: "#FF9F43",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    fontSize: "12px",
                    flexShrink: 0,
                  }}
                >
                  AI
                </div>

                <span
                  style={{
                    fontSize: "17px",
                    fontWeight: "600",
                    color: "#172F5F",
                  }}
                >
                  Assistant IA
                </span>

              </div>

              {/* CONTENU : spinner visible, erreur, ou réponse */}
              {loading ? (
                <Spinner />
              ) : error ? (
                <div
                  style={{
                    display: "block",
                    color: "#DC2626",
                    fontSize: "15px",
                    lineHeight: "1.8",
                  }}
                >
                  {error}
                </div>
              ) : (
                <div
                  style={{
                    display: "block",
                    color: "#333333",
                    fontSize: "15px",
                    lineHeight: "1.8",
                    whiteSpace: "pre-wrap",
                    textAlign: "left",
                    wordBreak: "break-word",
                  }}
                >
                  {answer}
                </div>
              )}

            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Ai;
