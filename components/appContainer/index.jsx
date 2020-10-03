import React from 'react'
import PropTypes from 'prop-types'
import { AUTH_STATE } from "../../redux/reducers/auth"
import DashboardHead from '../head'
import Loading from "./loading"
import { useSelector } from 'react-redux'


const AppContainer = ({ children }) => {
    //Hooks
    const authState = useSelector(state => state.Auth.authState)
    //Getters
    const getBody = () => {
        switch (authState) {
            case AUTH_STATE.INITIAL:
            case AUTH_STATE.CHECKING_COOKIE:
                return <Loading />
            default:
                return children
        }
    }
    //Render
    return (
        <>
            <DashboardHead />
            {getBody()}
        </>
    )
}

AppContainer.propTypes = {
    children: PropTypes.node
}

export default AppContainer
