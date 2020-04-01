import {GET_PROFILE, GET_PROFILE_ERROR, GET_PROFILE_SUCCESS} from "./constants";

export function getProfile() {
    return {
        type: GET_PROFILE
    }
}
export function getProfileSuccess(response) {
    return {
        type: GET_PROFILE_SUCCESS,
        payload: response,
    }
}
export function getProfileError(response) {
    return {
        type: GET_PROFILE_ERROR,
        payload: response,
    }
}

