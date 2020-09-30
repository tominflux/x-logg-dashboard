import React from 'react'
import { useDispatch } from 'react-redux'
import AUTH_ACTIONS from '../../redux/actions/auth'

const AuthCheck = () => {
    //Hooks
    const dispatch = useDispatch()
    //Effects
    // - Check cookie
    React.useEffect(() => {
        const checkCookie = async () => {
            //Update auth state to checking cookie.
            const checkCookieAction = AUTH_ACTIONS.checkCookie()
            dispatch(checkCookieAction)
            //Make GET request to login API.
            const apiPath = (
                `/api/admin/login`
            )
            const response = await fetch(apiPath)
            if (!response.ok) {
                //Update auth state to cookie invalid.
                const cookieInvalidAction = AUTH_ACTIONS.cookieInvalid()
                dispatch(cookieInvalidAction)
            } else {
                //Extract identifier from cookie.
                const { identifier } = await response.json()
                //Update auth state to cookie valid.
                const cookieValidAction = AUTH_ACTIONS.cookieValid(identifier)
                dispatch(cookieValidAction)
            }
        }
        checkCookie()
    }, [])
    //Render
    return null
}

export default AuthCheck