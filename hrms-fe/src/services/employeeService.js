import axios from "axios"

export default class EmployeeService{
    getEmployee(){
        return axios.get("/employee/getall")
    }

    update(employee){
        return axios.put("/employee/update",employee)
    }
}F