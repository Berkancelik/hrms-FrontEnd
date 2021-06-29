import axios from 'axios'

export default class JobExperienceService{
    getExperinces(){
        return axios.get("/api/jobexperience/getall");
    }
}