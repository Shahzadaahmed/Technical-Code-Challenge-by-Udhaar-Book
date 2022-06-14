/***** Note: All app action functions are defined here *****/

import axios from "axios";
import {
    FETCH_ALL_USERS
}
    from "../constant/action-types";

/***** Function to fetch all users *****/
const fetchAllUsers = () => {
    return async (dispatch) => {

        let apiUrl = "https://api.github.com/users";

        try {
            let response = await axios({
                method: "GET",
                url: apiUrl
            });
            // console.log(response);

            if (response.status == 200) {
                let { data } = response;
                dispatch({
                    type: FETCH_ALL_USERS,
                    payload: data
                });
            };
        }

        catch (error) {
            console.log("Error: ", error);
        };
    };
};

export {
    fetchAllUsers
};