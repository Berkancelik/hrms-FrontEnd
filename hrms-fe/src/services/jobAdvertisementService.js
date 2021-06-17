import axios from "axios"

export default class JobAdvertisementService{
  getJobAdverts() {

  return axios.get("http://localhost:8080/api/jobadverts/getAll");
}

add(values) {
  return axios.post("http://localhost:8080/api/jobadverts/add", values);
}


getAllActiveTrueAndOpenTrueJobAdvertisements(){
  return axios.get("http://localhost:8080/api/jobadvertisements/getAllActiveTrueAndOpenTrueJobAdvertisements")
}

getAllActiveFalseAndOpenTrueJobAdvertisements(){
  return axios.get("http://localhost:8080/api/jobadvertisements/getAllOpenJobAdvertsAndIsActiveFalse")
}

changeActiveStatus(id){
 return axios.post("http://localhost:8080/api/jobadvertisements/changeactivestatus?id="+id)
 
}
changeOpenStatus(id){
 return axios.post("http://localhost:8080/api/jobadvertisements/changeopenstatus?id="+id)
}

getAllByEmployerId(employerId){
return axios.get("http://localhost:8080/api/jobadvertisements/getAllByEmployerId?id="+employerId)
}

getAllOpenJobJobAdvertisementsByEmployer(id) {
  return axios.get(
    "http://localhost:8080/api/jobadvertisements/getAllOpenJobAdvertByEmployer?id=" +id );
}

getAllByOrderByPublishedAt(){
   return axios.get("http://localhost:8080/api/jobadvertisements/findAllByOrderByPublishedAt")
}

getAllOpenJobAdvertList(){
   return axios.get("http://localhost:8080/api/jobadvertisements/getAllOpenJobAdvertList")
}
}