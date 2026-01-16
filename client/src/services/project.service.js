import api from "./api";

export const registerProject = (data) => {
  return api.post("/projects/register", data);
};

export const getProjects = () => {
  return api.get("/projects");
};
