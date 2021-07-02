import axios from "axios"


export default class CandidateService{
    getCandidates(){
        return axios.get("http://localhost:8080/api/candidates/getall")
    }
    getResume(candidateId){
        return axios.get("http://localhost:8080/api/candidates/getCandidateResumeByCandidateId?candidateId="+candidateId)
    }

    getById(candidateId){
        return axios.get("http://localhost:8080/api/candidates/getById?id="+candidateId)
    }

    update(candidate){
        return axios.put("http://localhost:8080/api/candidates/update",candidate)
    }

}