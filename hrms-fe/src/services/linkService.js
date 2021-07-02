import axios from "axios";

export default class LinkService {
  getLinks(candidateId) {
    return axios.get("http://localhost:8080/api/links/getAllByCandidateId?candidateId=" + candidateId)
  }
  update(resumeLink) {
    return axios.put("http://localhost:8080/api/links/update", resumeLink)
  }
}
