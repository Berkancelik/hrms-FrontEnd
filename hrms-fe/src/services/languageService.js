import axios from "axios";

export default class LanguageService {
  add(values) {
    return axios.post("http://localhost:8080/api/languages/add", values);
  }

  update(values) {
    return axios.put(
      "http://localhost:8080/api/languages/update",
      values
    );
  }

  delete(foreignLanguageId) {
    return axios.delete(
      "http://localhost:8080/api/languages/delete?foreignLanguageId=" +
      foreignLanguageId
    );
  }
}