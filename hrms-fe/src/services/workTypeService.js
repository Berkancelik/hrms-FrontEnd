import axios from "axios";

export default class WorkinTypeService {
  getWorkTypes() {
    return axios.get("http://localhost:8080/api/workTypes/getall");
  }
}