import axios from "axios";

const nestApi = axios.create({
  baseURL: "http://localhost:3002",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAttendance = async () => {
  const response = await nestApi.get("/presences");
  return response.data;
};

export const createAttendance = async (enrollment_id, status) => {
  const response = await nestApi.post("/presences", { enrollment_id: Number(enrollment_id), status });
  return response.data;
};