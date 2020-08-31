import { combineReducers } from "redux";
import Auth from './auth'
import { initialAuthState } from './auth'

export const initialState = {
    Auth: {...initialAuthState}
}

const compositeReducer = combineReducers({
    Auth
})

export default compositeReducer