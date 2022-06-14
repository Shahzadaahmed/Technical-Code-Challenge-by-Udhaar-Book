/***** Note: All app cases are defined here *****/

import {
    FETCH_ALL_USERS
}
    from "../constant/action-types";

// Note: States of app reducer...!
const INIT_STATE = {
    users: []
};

const appReducer = (state = INIT_STATE, action) => {
    switch (action.type) {

        case FETCH_ALL_USERS:
            let usersClone = [...state.users];
            usersClone = action.payload;

            return {
                ...state,
                users: usersClone
            };

        default:
            return state;
    };
};

export default appReducer;