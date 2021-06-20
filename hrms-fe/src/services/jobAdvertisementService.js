import axios from "axios"

export default class JobAdvertisementService{
  getByConfirmAndActiveTrue(){
    return axios.get("http://localhost:8080/api/jobadvertisements/getbyisconfirmandisactive?isActive=true&isConfirm=true")
}

getByConfirmFalse(){
    return axios.get("http://localhost:8080/api/jobadvertisements/getbyisconfirm?isConfirm=false")
}

getByJobPostingIdAndConfirmFalse(jobPostingId){
    return axios.get("http://localhost:8080/api/jobadvertisements/getbyisconfirmandjobpostingid?isConfirm=false&jobPostingId="+jobPostingId)
}

getByJobPostingId(jobPostingId){
    return axios.get("http://localhost:8080/api/jobadvertisements/getbyjobpostingid?jobPostingId="+jobPostingId)
}

add(values){
    return axios.post("http://localhost:8080/api/jobadvertisements/add",values)
}

confirm(jobPostingId){
    return axios.post("http://localhost:8080/api/jobadvertisements/updateisconfirm?isConfirm=true&jobPostingId="+jobPostingId)
}
}