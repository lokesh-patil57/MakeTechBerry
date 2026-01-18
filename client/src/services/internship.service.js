import api from "./api";

export const registerInternship = (formData) => {
  return api.post("/internships/register", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const getInternships = () => {
  return api.get("/internships");
};
