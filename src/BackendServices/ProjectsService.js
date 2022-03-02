import http from "./HttpServices";
import config from "../config.json";
const projectApi = config.projectsApi + "/projects";

// function getProjectUrl(Id) {
//   return `${projectApi}/${Id}`;
// }
export function getProjects() {
  return http.get(projectApi);
}
// export function deleteProject(id) {
//   return http.delete(getProjectUrl(id));
// }

// export function saveProject(project) {
//   if (project._id) {
//     const body = { ...project };
//     delete body._id;
//     return http.put(getProjectUrl(project._id), body);
//   }
//   return http.post(projectApi, project);
// }
