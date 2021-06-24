import JobAdvertisementService from "../../services/jobAdvertisementService";

export const FETCH_ADVERTISEMENTS_PENDING = "FETCH_ADVERTISEMENTS_PENDING";
export const FETCH_ADVERTISEMENTS_SUCCESS = "FETCH_ADVERTISEMENTS_SUCCESS";
export const FETCH_ADVERTISEMENTS_ERROR = "FETCH_ADVERTISEMENTS_ERROR";

export function fetchJobAdvertisementsPending() {
    return {
        type: FETCH_ADVERTISEMENTS_PENDING
    }
}
export function fetchJobAdvertisementsSuccess(advertisements) {
    return {
        type: FETCH_ADVERTISEMENTS_SUCCESS,
        payload: advertisements
    }
}
export function fetchJobAdvertisementsError(error) {
    return {
        type: FETCH_ADVERTISEMENTS_ERROR,
        payload: error
    }
}


export const _fetchJobAdvertisements = () => {
    return async dispatch => {
        let jobAdvertisementService = new JobAdvertisementService();
            dispatch(fetchJobAdvertisementsPending());
            await jobAdvertisementService.getAdvertisements().then(response => {
                dispatch(fetchJobAdvertisementsSuccess(response.data.data))
            }).catch(error=>{
                dispatch(fetchJobAdvertisementsError(error.message))
            })

    }
}
