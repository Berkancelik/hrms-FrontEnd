import axios from "axios"

export default class jobAdvertisementService{
    getAll(){
        return axios.get("http://localhost:8080/api/jobAdvertisements/getAll")
    }
    getOpenjobAdvertisements(){
        return axios.get("http://localhost:8080/api/jobAdvertisementsisements/getAllOpenJobAdversitementsByEmployer")
    }
    getjobAdvertisementsOrderByPublishedAt(){
        return axios.get("http://localhost:8080/api/jobAdvertisements/findAllByOrderByPublishedAtDesc")
    }

    add(jobAdvertisement) {
        return axios.post("http://localhost:8080/api/jobAdvertisements/add", jobAdvertisement);
      }

      getAllByIsConfirmed(isConfirmed) {
        return axios.get(
          "http://localhost:8080/api/jobAdvertisements/getallbyisconfirmed?isConfirmed=" +
            isConfirmed
        );
      }
}