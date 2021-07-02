import axios from "axios";

export default class WorkHourService {

    getWorkHours() {
        return axios.get("/workhours/getall")
    }
}