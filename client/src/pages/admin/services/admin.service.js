import api from "../../../services/api";

export const getInternships = (token) =>
  api.get("/internships", {
    headers: { Authorization: `Bearer ${token}` }
  });

export const getProjects = (token) =>
  api.get("/projects", {
    headers: { Authorization: `Bearer ${token}` }
  });