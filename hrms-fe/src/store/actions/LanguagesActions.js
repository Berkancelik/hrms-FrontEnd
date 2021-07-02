export const GET_RESUME_LANGUAGE="GET_RESUME_LANGUAGE"

export default function getLanguage(language){
    return{
        type:GET_LANGUAGE,
        payload:language
    }
}