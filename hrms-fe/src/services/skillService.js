import axios from 'axios'


export default class SkillService{
    getskills(candidateId){
        return axios.get("http://localhost:8080/api/skills/getAllByCandidateId?candidateId="+candidateId)
    }

    update(technology){
        return axios.put("http://localhost:8080/api/skills/update",technology)
    }
}