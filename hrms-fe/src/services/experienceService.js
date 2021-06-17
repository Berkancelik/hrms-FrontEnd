import axios from 'axios'

export default class ExperienceService{
    getExperinces(){
        return axios.get("/api/jobexperience/getall");
    }
}