import JobTitleService from "../../services/jobTitleService";

export const FETCH_JOBTITLES_PENDING = "FETCH_JOBTITLES_PENDING";
export const FETCH_JOBTITLES_SUCCESS = "FETCH_JOBTITLES_SUCCESS";
export const FETCH_JOBTITLES_ERROR = "FETCH_JOBTITLES_ERROR";

export function fetchJobTitlesPending() {
    return {
        type: FETCH_JOBTITLES_PENDING
    }
}
export function fetchJobtitlesSuccess(jobTitle) {
    return {
        type: FETCH_JOBTITLES_SUCCESS,
        payload: jobTitle
    }
}
export function fetchJobTitlesError(error) {
    return {
        type: FETCH_JOBTITLES_ERROR,
        payload: error
    }
}

//-------

export const _fetchJobTitles = () => {
    return async dispatch => {
        let jobTitleService = new JobTitleService();
        dispatch(fetchJobTitlesPending());
        await jobTitleService.getJobTitles().then(response => {
            dispatch(fetchJobtitlesSuccess(response.data.data))
        }).catch(error => {
            dispatch(fetchJobTitlesError(error.message))
        })
    }
}