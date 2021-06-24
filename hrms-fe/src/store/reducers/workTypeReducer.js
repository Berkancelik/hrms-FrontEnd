import { FETCH_WORKTYPES_PENDING, FETCH_WORKTYPES_SUCCESS, FETCH_WORKTYPES_ERROR } from "../actions/workTypeActions"
import { workTypes } from "../initialValues/workTypes"

const initialState = {
    workTypes: workTypes,
    pending: false,
    error: null
}

export default function workTypeReducer(state = initialState, { type, payload }) {
    switch (type) {
        case FETCH_WORKTYPES_PENDING:
            return {
                ...state,
                pending: true,
                error: null
            }
        case FETCH_WORKTYPES_SUCCESS:
            return {
                ...state,
                workTypes: payload,
                pending: false,
                error: null
            }
        case FETCH_WORKTYPES_ERROR:
            return {
                ...state,
                pending: false,
                error: payload
            }
        default:
            return state;
    }
}