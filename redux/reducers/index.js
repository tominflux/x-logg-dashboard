import { combineReducers } from "redux";
import Auth, { initialAuthState } from './auth'
import Catalogue, { initialCatalogueState } from './catalogue'
import Collection, { initialCollectionState } from './collection'

export const initialState = {
    Auth: { ...initialAuthState },
    Catalogue: { ...initialCatalogueState },
    Collection: { ...initialCollectionState }
}

const compositeReducer = combineReducers({
    Auth,
    Catalogue,
    Collection
})

export default compositeReducer