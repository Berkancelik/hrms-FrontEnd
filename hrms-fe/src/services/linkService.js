import axios from "axios";

export default class LinkService {
  getSocialMedias(candidateId) {
    return axios.get("/links/getAllByCandidateId?candidateId=" + candidateId)
  }
  update(resumeLink) {
    return axios.put("/links/update", resumeLink)
  }
}
