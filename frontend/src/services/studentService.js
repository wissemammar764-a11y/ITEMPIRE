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