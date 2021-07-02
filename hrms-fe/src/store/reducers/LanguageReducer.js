import { GET_LANGUAGE } from "../actions/LanguageActions";
import { language } from "../initialValues/ResumeLanguage";

const initialState = {
    language: language
}

export default function LanguageReducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_LANGUAGE:
            return payload
        default:
            return state;

    }
}