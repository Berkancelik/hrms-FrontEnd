import axios from "axios";

export default class FavoriteService {
  add(favorite){
    return axios.post("/candidatejobadvertisementfavorites/add",favorite)
}

getByCandidateId(id){
    return axios.get("/candidatejobadvertisementfavorites/getByCandidate_Id?id="+id)
}

deleteFavorites(id){
    return axios.delete("/candidatejobadvertisementfavorites/deleteById?id="+id)
}
}