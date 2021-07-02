import axios from 'axios'


export default class SkillService{
    getTechnologies(candidateId){
        return axios.get("/skills/getAllByCandidateId?candidateId="+candidateId)
    }

    update(technology){
        return axios.put("/skills/update",technology)
    }
}