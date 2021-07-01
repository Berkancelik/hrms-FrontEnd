import axios from "axios"

export default class JobAdvertisementService{
 

getByConfirmFalse(){
    return axios.get("http://localhost:8080/api/jobadvertisements/getbyisconfirm?isConfirm=false")
}

getByConfirmAndActiveTrue(pageNo, pageSize) {
    return axios.get(
      "http://localhost:8080/api/jobadvertisements/getbyisconfirmandisactive?isActive=true&isConfirm=true&pageNo=" +
        pageNo +
        "&pageSize=" +
        pageSize
    );
  }

  getByConfirmFalseAndActiveTrue(pageNo, pageSize) {
    return axios.get(
      "http://localhost:8080/api/jobadvertisements/getbyisconfirmandisactive?isActive=true&isConfirm=false&pageNo=" +
        pageNo +
        "&pageSize=" +
        pageSize
    );
  }

getByJobAdvertisementIdAndConfirmFalse(id){
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

    getByFilter(jobAdvertisementFilters, pageNo, pageSize) {
        return axios.post(
          "http://localhost:8080/api/jobadvertisements/getbyfilter?pageNo=" +
            pageNo +
            "&pageSize=" +
            pageSize,
          jobAdvertisementFilters
        );
      }
}