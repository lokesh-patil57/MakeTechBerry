import api from "./api";

export const registerInternship = (data) => {
  return api.post("/internships/register", data);
};

export const getInternships = () => {
  return api.get("/internships");
};
