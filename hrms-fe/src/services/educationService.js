import axios from "axios";

export default class EducationService {
  getByCandidateId(candidateId) {
    return axios.get("http://localhost:8080/api/schools/getAllByCandidateId?candidateId=" + candidateId)
  }
  update(education) {
    return axios.put("http://localhost:8080/api/schools/update", education)
  }
}