import WorkTypeService from "../../services/workTypeService";
export const FETCH_WORKTYPES_PENDING = "FETCH_WORKTYPES_PENDING";
export const FETCH_WORKTYPES_SUCCESS = "FETCH_WORKTYPES_SUCCESS";
export const FETCH_WOTKTYPES_ERROR = "FETCH_WOTKTYPES_ERROR";

export function fetchWorkTypesPending() {
    return {
        type: FETCH_WORKTYPES_PENDING
    }
}
export function fetchWorkTypesSuccess(jobTypes) {
    return {
        type: FETCH_WORKTYPES_SUCCESS,
        payload: jobTypes
    }
}
export function fetchWorkTypesError(error) {
    return {
        type: FETCH_WOTKTYPES_ERROR,
        payload: error
    }
}


export const _fetchWorkTypes = () => {
    return async dispatch => {
        let workTypeService = new WorkTypeService();
        dispatch(fetchWorkTypesPending());
        await workTypeService.getWorkTypes().then(response => {
            dispatch(fetchWorkTypesSuccess(response.data.data))
        }).catch(error => {
            dispatch(fetchWorkTypesError(error.message))
        })
    }
}