import axios from "axios"


export default class JobTitleService {
    getJobTitles() {
        return axios.get("/titles/getall")
    }
}