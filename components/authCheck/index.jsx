import React from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import AUTH_ACTIONS from '../../redux/actions/auth'

const AuthCheck = () => {
    //Hooks
    const router = useRouter()
    const dispatch = useDispatch()
    const authState = useSelector(state => state.Auth.authState)
    //Getters
    const isAtLogin = () => (router.pathname === "/login")
    const isAuthed = () => (
        authState === "LOGGED_IN"
    )
    const possiblyAuthed = () => (
        authState === "INITIAL" ||
        authState === "CHECKING_COOKIE" ||
        authState === "LOGGING_IN"
    )
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
    // - Login Redirect
    React.useEffect(() => {
        const redirectToLogin = (
            !isAtLogin() &&
            (
                !isAuthed() &&
                !possiblyAuthed()
            )
        )
        const redirectToHome = (
            isAtLogin() && isAuthed()
        )
        if (redirectToLogin) {
            router.push("/login")
        }
        if (redirectToHome) {
            router.push("/")
        }
    })
    //Render
    return null
}

export default AuthCheck