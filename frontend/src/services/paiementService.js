import axios from "axios";

const nestApi = axios.create({
  baseURL: "http://localhost:3002",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getPaiements = async () => {
  const response = await nestApi.get("/paiements");
  return response.data;
};

export const createPaiement = async (form) => {
  const payload = {
    enrollment_id: Number(form.enrollment_id),
    amount: Number(form.amount),
    payment_method: form.payment_method,
  };

  const response = await nestApi.post("/paiements", payload);
  return response.data;
};