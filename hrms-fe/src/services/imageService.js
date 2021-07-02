import axios from 'axios'

export default class ImageService{
    getImages(candidateId){
        return axios.get("/image/getAllByCandidateId?candidateId="+candidateId)
    }
}