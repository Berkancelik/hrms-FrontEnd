import { combineReducers } from "redux";
import favoriteReducer from "./reducers/favoriteReducer";
import jobAdvertisementReducer from "./reducers/jobAdvertisementReducer";
import cityReducer from "./reducers/cityReducer"
import workTypeReducer from "./reducers/workTypeReducer";
import jobTitleReducer from "./reducers/jobTitleReduces";

const rootReducer = combineReducers({
    favorites: favoriteReducer, 
    advertisements: jobAdvertisementReducer,
    allCities: cityReducer,
    jobTypes: workTypeReducer,
    positions: jobTitleReducer
})

export default rootReducer;