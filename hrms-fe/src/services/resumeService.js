import axios from "axios";

export default class ResumeService{
    getByJobseekerId(id){
        return axios.get("http://localhost:8080/api/resumes/getbycandidateid?id="+id)
    }

    getByCurriculumVitaeId(curriculumVitaeId){
        return axios.get("http://localhost:8080/api/resumes/getById?id="+id)
    }

    add(values){
        return axios.post("http://localhost:8080/api/resumes/add",values)
    }

    delete(curriculumVitaeId){
        return axios.delete("http://localhost:8080/api/resumes/delete?id="+id)
    }
}