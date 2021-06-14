import axios from "axios";

export default class jobAdvertConfirmService{
    getAll(){
        return axios.get(
            "http://localhost:8080/api/jobadvertconfirms/getall"
        );
    }

    add(jobAdvertConfirm) {
        console.log(jobAdvertConfirm);
        return axios.post(
          "http://localhost:8080/api/jobadvertconfirms/add",
          jobAdvertConfirm
        );
      }
}