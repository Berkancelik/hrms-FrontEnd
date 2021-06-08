import axios from "axios"


export default class jobTitleService{
    getjobTitles(){
        return axios.get("http://localhost:8080/api/jobTitles/getall")
    }
}