import {AuthState} from "../types/types";

export const initialState: AuthState = {
    isAuth: false
}

export default function authReducer(valueState: boolean, state = initialState): AuthState {
    if (valueState) {
        state.isAuth = true
    } else {
        state.isAuth = false
    }
    return state
}