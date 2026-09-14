import axios from "axios";

const nestApi = axios.create({
  baseURL: "http://localhost:3002",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getTrainers = async () => {
  const response = await nestApi.get("/trainers");
  return response.data;
};

// Crée un utilisateur + un formateur en une seule requête (POST /trainers/account)
export const createTrainer = async (form) => {
  const payload = {
    first_name: form.prenom,
    last_name: form.nom,
    email: form.email,
    phone: form.telephone,
    cin: form.cin,
    speciality: form.specialite,
  };

  const response = await nestApi.post("/trainers/account", payload);
  return response.data;
};