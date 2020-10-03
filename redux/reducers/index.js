import { combineReducers } from "redux";
import Auth from './auth'
import Catalogue from './catalogue'
import { initialAuthState } from './auth'
import { initialCatalogueState } from "./catalogue";

export const initialState = {
    Auth: { ...initialAuthState },
    Catalogue: { ...initialCatalogueState }
}

const compositeReducer = combineReducers({
    Auth,
    Catalogue,
})

export default compositeReducer