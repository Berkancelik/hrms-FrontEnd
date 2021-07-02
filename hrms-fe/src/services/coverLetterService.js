import axios from "axios";

export default class CoverLetterService {


  getCoverLetter(candidateId) {
    return axios.get("http://localhost:8080/api/letterofacceptances/getAllByCandidateId?candidateId=" + candidateId)
  }

  update(coverLetter) {
    return axios.put("http://localhost:8080/api/letterofacceptances/update", coverLetter)
  }
}