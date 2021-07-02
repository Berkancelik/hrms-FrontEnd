import axios from "axios";

export default class WorkHourService {

    workHours() {
        return axios.get("/workhours/getall")
    }
}