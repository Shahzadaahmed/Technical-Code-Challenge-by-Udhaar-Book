/***** Note: Main reducer file *****/

import { combineReducers } from "redux";

// Note: Importing requited reducers...!
import appReducer from "./app-reducer";

const rootReducer = combineReducers({
    appStates: appReducer
});

export default rootReducer;