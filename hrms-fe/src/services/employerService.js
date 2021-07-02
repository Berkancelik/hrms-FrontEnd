import axios from "axios"

export default class EmployerService{
    getEmployers(){
        return axios.get("http://localhost:8080/api/employers/getall")
    }

    getById(employerId){
        return axios.get("http://localhost:8080/api/employers/getById?id="+employerId)
    }

    updateWaiting(employer){
        return axios.post("http://localhost:8080/api/employers/updateWaiting",employer)
    }
    updateConfirmStatus(employerId){
        return axios.post("http://localhost:8080/api/employers/updateConfirmStatus?employerId="+employerId)
    }
    getByConfirmStatusFalse(){
        return axios.get("http://localhost:8080/api/employers/getByConfirmStatusFalse")
    }
}