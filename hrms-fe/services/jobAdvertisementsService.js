import axios from "axios"

export default class jobAdvertisementsService{
    getjobAdvertisementss(){
        return axios.get("http://localhost:8080/api/jobAdvertisements/getAll")
    }
    getOpenjobAdvertisementss(){
        return axios.get("http://localhost:8080/api/jobAdvertisementsisements/getAllOpenJobAdversitementsByEmployer")
    }
    getjobAdvertisementssOrderByPublishedAt(){
        return axios.get("http://localhost:8080/api/jobAdvertisements/findAllByOrderByPublishedAtDesc")
    }
}