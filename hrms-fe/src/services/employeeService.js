import axios from "axios"

export default class EmployeeService{
    getEmployee(){
        return axios.get("http://localhost:8080/api/employee/getall")
    }

    update(employee){
        return axios.put("http://localhost:8080/api/employee/update",employee)
    }
}