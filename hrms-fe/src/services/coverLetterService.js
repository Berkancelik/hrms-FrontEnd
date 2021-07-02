import axios from "axios";

export default class CoverLetterService {


  getCoverLetter(candidateId) {
    return axios.get("/letterofacceptances/getAllByCandidateId?candidateId=" + candidateId)
  }

  update(coverLetter) {
    return axios.put("/letterofacceptances/update", coverLetter)
  }
}