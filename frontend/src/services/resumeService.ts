import api from "../api/axios";

export const uploadResume = async (file: File) => {
  const formData = new FormData();

  formData.append("resume", file);

  const token = localStorage.getItem("token");

  const response = await api.post("/resume/", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};


export const getLatestResumeAnalysis = async () => {
  const token = localStorage.getItem("token");

  const response = await api.get("/resume/latest", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};