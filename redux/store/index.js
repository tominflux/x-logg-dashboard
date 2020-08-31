const { createStore, applyMiddleware } = require("redux");
import { composeWithDevTools } from 'redux-devtools-extension'
import { useMemo } from 'react';
const { 
    default: compositeReducer, 
    initialState 
} = require("../reducers");

let store = null

const initStore = (preloadedState=initialState) => (
    createStore(
        compositeReducer,
        preloadedState,
        composeWithDevTools(applyMiddleware())
    )
)

export const initialiseStore = (preloadedState) => {
    let _store = store ?? initStore(preloadedState)
    //After navigating to a page with an initial Redux state, merge that state
    //with the current state in the store, and create a new store
    if (preloadedState && store) {
        _store = initStore({
            ...store.getState(),
            ...preloadedState
        })
        //
        store = null
    }
    //For SSG and SSR always create a new store
    if (typeof window === 'undefined') return _store
    //Create the store once in the client
    if (!store) store = _store
    //
    return _store
}

export const useStore = (initialState) => {
    const store = useMemo(
        () => initialiseStore(initialState),
        [initialState]
    )
    return store
}