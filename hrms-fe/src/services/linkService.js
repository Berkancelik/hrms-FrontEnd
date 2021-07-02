import axios from "axios";

export default class LinkService {
  getSocialMedias(candidateId) {
    return axios.get("/links/getAllByCandidateId?candidateId=" + candidateId)
  }
  update(v) {
    return axios.put("/links/update", resumeLink)
  }
}
