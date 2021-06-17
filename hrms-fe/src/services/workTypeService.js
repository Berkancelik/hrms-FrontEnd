import axios from "axios";

export default class WorkinTypeService {
  getAll() {
    return axios.get("http://localhost:8080/api/workingTypes/getall");
  }
}