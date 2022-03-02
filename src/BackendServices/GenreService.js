import http from "../HttpServices";
import config from "../config.json";
const genreApi = config.projectsApi + "/genres";

export function getGenres() {
  return http.get(genreApi);
}
