import axios from "axios"

export default class JobAdvertisementService {


  getJobPost() {
    return axios.get("http://localhost:8080/api/jobadvertisements/getall")
  }

  addJobAdvertisement(jobAdvertisement) {
    return axios.post("http://localhost:8080/api/jobadvertisements/add", jobAdvertisement)
  }

  getActiveJobs() {
    return axios.get("http://localhost:8080/api/jobadvertisements/getallbyisactivetrue")
  }

  getConfirmStatusFalse() {
    return axios.get("http://localhost:8080/api/jobadvertisements/getbyconfirmstatusfalse")
  }

  updateConfirmStatus(jobAdvertisementId) {
    return axios.post("http://localhost:8080/api/jobadvertisements/updateconfirmStatus?jobAdvertisementId=" + jobAdvertisementId)
  }

  getisActiveAndConfirmed() {
    return axios.get("http://localhost:8080/api/jobadvertisements/getbyisactivetrueandconfirmstatustrue")
  }

  deleteJobAdvertisement(jobAdvertisementId) {
    return axios.post("http://localhost:8080/api/jobadvertisements/delete?jobAdvertisementId=" + jobAdvertisementId)
  }

  getByJobAdvertisementId(id) {
    return axios.get("http://localhost:8080/api/jobadvertisements/getById?id=" + id)
  }

  getisActiveAndConfirmedPageAble(pageNo, pageSize) {
    return axios.get("http://localhost:8080/api/jobadvertisements/getByPage?pageNo=" + pageNo + "&pageSize=" + pageSize)
  }

  getByisActiveTrueAndConfirmStatusTrueAndFilter(pageNo, pageSize, filter) {
    return axios.post(`http://localhost:8080/api/jobadvertisements/getbyisactivetrueandconfirmstatustrueandfilter?pageNo=${pageNo}&pageSize=${pageSize}`, filter)
  }
  getByEmployerId(id) {
    return axios.get("http://localhost:8080/api/jobadvertisements/getByEmployer_Id?employerid=" + id)
  }
}