import axios from "axios";

export default class LanguageService {
  getLanguages(candidateId) {
    return axios.get("http://localhost:8080/api/languages/getAllByCandidateId?candidateId=" + candidateId)
  }

  add(language) {
    return axios.post("http://localhost:8080/api/languages/add", language)
  }

  getLanguageList() {
    return axios.get("http://localhost:8080/api/languages/getall")
  }

  getForeignLanguage() {
    return axios.get("http://localhost:8080/api/language/getall")
  }

  updateLanguages(language) {
    return axios.put("http://localhost:8080/api/languages/update", language)
  }
}