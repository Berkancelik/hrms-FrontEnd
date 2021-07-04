import axios from "axios";

export default class LinkService {
  add(values) {
    return axios.post("http://localhost:8080/api/links/add", values);
  }

  update(values) {
    return axios.put(
      "http://localhost:8080/api/links/update",
      values
    );
  }

  delete(id) {
    return axios.delete(
      "http://localhost:8080/api/links/delete?id=" +
      id
    );
  }
}