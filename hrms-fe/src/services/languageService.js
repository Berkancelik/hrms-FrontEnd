import axios from "axios";

export default class LanguageService {
  getLanguages(candidateId) {
    return axios.get("/languages/getAllByCandidateId?candidateId=" + candidateId)
  }

  add(language) {
    return axios.post("/languages/add", language)
  }

  getLanguageList() {
    return axios.get("/languages/getall")
  }

  getForeignLanguage() {
    return axios.get("/language/getall")
  }

  updateLanguages(language) {
    return axios.put("/languages/update", language)
  }
}