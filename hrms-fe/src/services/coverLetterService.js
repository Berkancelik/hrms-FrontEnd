import axios from "axios";

export default class CoverLetterService {
  add(values) {
    return axios.post("http://localhost:8080/api/letterofacceptances/add", values);
  }

  update(values) {
    return axios.put("http://localhost:8080/api/letterofacceptances/update", values);
  }

  delete(id) {
    return axios.delete("http://localhost:8080/api/letterofacceptances/delete?id="+id);
  }
}