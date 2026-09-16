import axios from "axios";

const nestApi = axios.create({
  baseURL: "http://localhost:3002",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getInscriptions = async () => {
  const response = await nestApi.get("/inscription");
  return response.data;
};

export const createInscription = async (form) => {
  const payload = {
    student_id: Number(form.student_id),
    session_id: Number(form.session_id),
  };

  const response = await nestApi.post("/inscription", payload);
  return response.data;
};