import axios from "axios";

const nestApi = axios.create({
  baseURL: "http://localhost:3002",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getSessions = async () => {
  const response = await nestApi.get("/sessions");
  return response.data;
};

export const createSession = async (form) => {
  const payload = {
    formation_id: Number(form.formation_id),
    trainer_id: Number(form.trainer_id),
    room: form.room,
    mode: form.mode,
    schedule: form.schedule,
    start_date: form.start_date,
    end_date: form.end_date,
  };

  const response = await nestApi.post("/sessions", payload);
  return response.data;
};