import AUTH_ACTION_TYPE from '../../actionTypes/auth'

const checkCookie = () => ({
    type: AUTH_ACTION_TYPE.CHECK_COOKIE,
    payload: {}
})

const cookieValid = (cookieAdminId) => ({
    type: AUTH_ACTION_TYPE.COOKIE_VALID,
    payload: { cookieAdminId }
})

const cookieInvalid = () => ({
    type: AUTH_ACTION_TYPE.COOKIE_INVALID,
    payload: {}
})

const login = () => ({
    type: AUTH_ACTION_TYPE.LOGIN,
    payload: {}
})

const loginValid = (loginAdminId) => ({
    type: AUTH_ACTION_TYPE.LOGIN_VALID,
    payload: { loginAdminId }
})

const loginInvalid = () => ({
    type: AUTH_ACTION_TYPE.LOGIN_INVALID,
    payload: {}
})

const logout = () => ({
    type: AUTH_ACTION_TYPE.COOKIE_INVALID,
    payload: {}
})


///////////////
///////////////


const AUTH_ACTIONS = {
    checkCookie,
    cookieValid,
    cookieInvalid,
    login,
    loginValid,
    loginInvalid,
    logout
}

export default AUTH_ACTIONS