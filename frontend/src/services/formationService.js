import axios from "axios";

const nestApi = axios.create({
  baseURL: "http://localhost:3002",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getFormations = async () => {
  const response = await nestApi.get("/formation");
  return response.data;
};

export const createFormation = async (form) => {
  const payload = {
    title: form.titre,
    description: form.description,
    duration_hours: form.duree ? Number(form.duree) : undefined,
    price: form.prix ? Number(form.prix) : undefined,
  };

  const response = await nestApi.post("/formation", payload);
  return response.data;
};