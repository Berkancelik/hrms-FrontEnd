import axios from 'axios'

export default class JobExperienceService{
    getJobExperiences(candidateId){
        return axios.get("http://localhost:8080/api/jobexperiences/getAllByCandidateId?candidateId="+candidateId)
    }

    update(jobExperience){
        return axios.put("http://localhost:8080/api/jobexperiences/update",jobExperience)
    }
}