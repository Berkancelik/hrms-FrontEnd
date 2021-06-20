import axios from "axios"

export default class JobAdvertisementService{
  getByConfirmAndActiveTrue(){
    return axios.get("http://localhost:8080/api/jobadvertisements/getbyisconfirmandisactive?isActive=true&isConfirm=true")
}

getByConfirmFalse(){
    return axios.get("http://localhost:8080/api/jobadvertisements/getbyisconfirm?isConfirm=false")
}

getByJobPostingIdAndConfirmFalse(id){
    return axios.get("http://localhost:8080/api/jobadvertisements/getbyisconfirm?isConfirm=false&id="+id)
}

getById(id){
    return axios.get("http://localhost:8080/api/jobadvertisements/getbyid?id="+id)
}

add(values){
    return axios.post("http://localhost:8080/api/jobadvertisements/add",values)
}

confirm(id){
    return axios.post("http://localhost:8080/api/jobadvertisements/updateisconfirm?isConfirm=true&id="+id)
}
}