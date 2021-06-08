import axios from "axios"

export default class jobAdvertisementService{
    getjobAdvertisements(){
        return axios.get("http://localhost:8080/api/jobAdvertisements/getAll")
    }
    getOpenjobAdvertisements(){
        return axios.get("http://localhost:8080/api/jobAdvertisementsisements/getAllOpenJobAdversitementsByEmployer")
    }
    getjobAdvertisementsOrderByPublishedAt(){
        return axios.get("http://localhost:8080/api/jobAdvertisements/findAllByOrderByPublishedAtDesc")
    }
}