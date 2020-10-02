import React from 'react'
import { AUTH_STATE } from "../../redux/reducers/auth"
import Loading from "./loading"
const { useSelector } = require("react-redux")


const AppContainer = (props) => {
    //Hooks
    const authState = useSelector(state => state.Auth.authState)
    //Render
    switch (authState) {
        case AUTH_STATE.INITIAL:
        case AUTH_STATE.CHECKING_COOKIE:
            return <Loading />
        default:
            return props.children 
    }
}

export default AppContainer
