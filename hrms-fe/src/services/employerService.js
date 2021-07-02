import axios from "axios"

export default class EmployerService{
    getEmployers(){
        return axios.get("/employers/getall")
    }

    getById(employerId){
        return axios.get("/employers/getById?id="+employerId)
    }

    updateWaiting(employer){
        return axios.post("/employers/updateWaiting",employer)
    }
    updateConfirmStatus(employerId){
        return axios.post("/employers/updateConfirmStatus?employerId="+employerId)
    }
    getByConfirmStatusFalse(){
        return axios.get("/employers/getByConfirmStatusFalse")
    }
}