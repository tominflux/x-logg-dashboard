import { combineReducers } from "redux";
import Auth, { initialAuthState } from './auth'
import Catalogue, { initialCatalogueState } from './catalogue'
import Collection, { initialCollectionState } from './collection'
import Item, { initialItemState } from "./item";

export const initialState = {
    Auth: { ...initialAuthState },
    Catalogue: { ...initialCatalogueState },
    Collection: { ...initialCollectionState },
    Item: { ...initialItemState }
}

const compositeReducer = combineReducers({
    Auth,
    Catalogue,
    Collection,
    Item
})

export default compositeReducer