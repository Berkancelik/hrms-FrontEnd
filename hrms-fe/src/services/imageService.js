import axios from 'axios'

export default class ImageService{
    getImages(){
        return axios.get("http://localhost:8080/api/images/getall");
    }
}