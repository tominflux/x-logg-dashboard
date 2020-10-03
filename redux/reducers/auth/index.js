import AUTH_ACTION_TYPE from '../../actionTypes/auth'

export const AUTH_STATE = {
    INITIAL: "INITIAL", //Requires cookie check.
    CHECKING_COOKIE: "CHECKING_COOKIE",
    INVALID_COOKIE: "INVALID_COOKIE",
    LOGGING_IN: "LOGGING_IN",
    INVALID_LOGIN: "INVLAID_LOGIN",
    LOGGED_IN: "LOGGED_IN"
}

export const initialAuthState = {
    authState: AUTH_STATE.INITIAL,
    adminId: null
}

const Auth = (state = initialAuthState, action) => {
    switch (action.type) {
        case AUTH_ACTION_TYPE.CHECK_COOKIE:
            return {
                ...state,
                authState: AUTH_STATE.CHECKING_COOKIE
            }
        case AUTH_ACTION_TYPE.COOKIE_VALID: {
            const { cookieAdminId } = action.payload
            return {
                ...state,
                adminId: cookieAdminId,
                authState: AUTH_STATE.LOGGED_IN
            }
        }
        case AUTH_ACTION_TYPE.COOKIE_INVALID:
            return {
                ...state,
                adminId: null,
                authState: AUTH_STATE.INVALID_COOKIE
            }
        case AUTH_ACTION_TYPE.LOGIN:
            return {
                ...state,
                authState: AUTH_STATE.LOGGING_IN
            }
        case AUTH_ACTION_TYPE.LOGIN_VALID: {
            const { loginAdminId } = action.payload
            return {
                ...state,
                adminId: loginAdminId,
                authState: AUTH_STATE.LOGGED_IN
            }
        }
        case AUTH_ACTION_TYPE.LOGIN_INVALID:
            return {
                ...state,
                adminId: null,
                authState: AUTH_STATE.INVALID_LOGIN
            }
        default:
            return state
    }
}

export default Auth