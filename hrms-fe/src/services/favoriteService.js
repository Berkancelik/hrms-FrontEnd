import axios from "axios";

export default class FavoriteService {
  add(favorite){
    return axios.post("http://localhost:8080/api/candidatejobadvertisementfavorites/add",favorite)
}

getByCandidateId(id){
    return axios.get("http://localhost:8080/api/candidatejobadvertisementfavorites/getByCandidate_Id?id="+id)
}

deleteFavorites(id){
    return axios.delete("http://localhost:8080/api/candidatejobadvertisementfavorites/deleteById?id="+id)
}
}