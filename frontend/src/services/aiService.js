import api from "./api";

export const askAI = async (question) => {
  const response = await api.post("/chat", {
    question: question,
  });

  return response.data.response;
};