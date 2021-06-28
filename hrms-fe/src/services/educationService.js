import axios from "axios";

export default class EducationService {
  add(values) {
    return axios.post("http://localhost:8080/api/educations/add", values);
  }

  update(values) {
    return axios.put(
      "http://localhost:8080/api/educations/update",
      values
    );
  }

  delete(id) {
    return axios.delete(
      "http://localhost:8080/api/educations/delete?id=" +
        id
    );
  }
}