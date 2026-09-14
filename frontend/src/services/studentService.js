import axios from "axios";

const nestApi = axios.create({
  baseURL: "http://localhost:3002",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getStudents = async () => {
  const response = await nestApi.get("/students");
  return response.data;
};

// Crée un utilisateur + un étudiant en une seule requête (POST /students/account)
export const createStudent = async (form) => {
  const payload = {
    first_name: form.prenom,
    last_name: form.nom,
    email: form.email,
    phone: form.telephone,
    cin: form.cin,
    education_level: form.niveau,
  };

  const response = await nestApi.post("/students/account", payload);
  return response.data;
};

export const updateStudent = async (id, form) => {
  const response = await nestApi.patch(`/students/${id}`, form);
  return response.data;
};

export const deleteStudent = async (id) => {
  const response = await nestApi.delete(`/students/${id}`);
  return response.data;
};