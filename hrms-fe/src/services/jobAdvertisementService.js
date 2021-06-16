import axios from "axios"

export default class JobAdvertisementService{
  getAll() {
    return axios.get("http://localhost:8080/api/jobadvertisements/getall");
  }

  getAllApprovedStatus() {
    return axios.get(
      "http://localhost:8080/api/jobadvertisements/getallapprovedstatus"
    );
  }

  getById(id) {
    return axios.get("http://localhost:8080/api/jobadvertisements/getbyid?id=" + id);
  }

  getAllByEmployerId(employerId) {
    return axios.get(
      "http://localhost:8080/api/jobadvertisements/getallbyemployerid?employerId=" +
        employerId
    );
  }

  add(jobPosting) {
    return axios.post("http://localhost:8080/api/jobadvertisements/add", jobPosting);
  }
}