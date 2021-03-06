import axios from "axios";

export default class FavoriteService {
  add(values) {
    return axios.post("http://localhost:8080/api/candidatejobadvertisementfavorites/add", values);
  }

  delete(id) {
    return axios.delete(
      "http://localhost:8080/api/candidatejobadvertisementfavorites/delete?id=" + id
    );
  }

  getByCandidateId(candidateId) {
    return axios.get(
      "http://localhost:8080/api/candidatejobadvertisementfavorites/getbycandidateid?candidateId=" +
      candidateId
    );
  }
}