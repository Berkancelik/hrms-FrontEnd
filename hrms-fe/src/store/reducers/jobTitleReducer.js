import { FETCH_JOBTITLES_PENDING, FETCH_JOBTITLES_SUCCESS, FETCH_JOBTITLES_ERROR } from "../actions/jobTitlesActions"
import { jobTitles } from "../initialValues/jobTitles"

const initialState = {
    jobTitles: jobTitles,
    pending: false,
    error: null
}

export default function jobTitleReducer(state = initialState, { type, payload }) {
    switch (type) {
        case FETCH_JOBTITLES_PENDING:
            return {
                ...state,
                pending: true,
                error: null
            }
        case FETCH_JOBTITLES_SUCCESS:
            return {
                ...state,
                jobTitles: payload,
                pending: false,
                error: null
            }
        case FETCH_JOBTITLES_ERROR:
            return {
                ...state,
                pending: false,
                error: payload
            }
        default:
            return state;
    }
}