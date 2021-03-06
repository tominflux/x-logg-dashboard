import styles from './login.module.css'
import { useDispatch } from 'react-redux'
import AUTH_ACTIONS from '../../redux/actions/auth'


const Login = () => {
    //Hooks
    const dispatch = useDispatch()
    //Refs
    const usernameInput = React.createRef(null)
    const passwordInput = React.createRef(null)
    //Events
    // - Login Button Click
    const onLoginClick = () => {
        const performLogin = async () => {
            //Escape event if username or password inputs
            //not yet rendered (very unlikely scenario).
            if (!usernameInput.current || !passwordInput.current) {
                return
            }
            //Extract username and password values from inputs.
            const username = usernameInput.current.value
            const password = passwordInput.current.value
            //Update auth state to "logging in"
            const loginAction = AUTH_ACTIONS.login()
            dispatch(loginAction)
            //Attempt to login
            const apiPath = (
                `/api/admin/login/${username}`
            )
            const body = JSON.stringify({ password })
            const response = await fetch(
                apiPath, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body
                }
            )
            if (!response.ok) {
                //Update auth state to "login invalid".
                const loginInvalidAction = AUTH_ACTIONS.loginInvalid()
                dispatch(loginInvalidAction)
                /*
                //Interpret response error message.
                const responseBody = await response.json()
                alert(responseBody.error)
                */
            } else {
                //Update auth state to "login valid".
                const loginValidAction = AUTH_ACTIONS.loginValid(username)
                dispatch(loginValidAction)
            }
        }
        performLogin()
    }
    //Render
    return (
        <div 
            className={styles.login}
        >
            <div className="row align-items-center">
                <div 
                    className={
                        `col-md-5 ${styles.login__labelCol}`
                    }
                >
                    <span
                        className={styles.login__label}
                    >
                        Username:
                    </span>
                </div>
                <div
                    className={
                        `col-md-7 ${styles.login__inputCol}`
                    }
                >
                    <input
                        ref={usernameInput}
                        className="login__input"
                        type="text"
                    />
                </div>
            </div>
            <div className="row align-items-center">
                <div 
                    className={
                        `col-md-5 ${styles.login__labelCol}`
                    }
                >
                    <span
                        className={styles.login__label}
                    >
                        Password:
                    </span>
                </div>
                <div
                    className={
                        `col-md-7 ${styles.login__inputCol}`
                    }
                >
                    <input
                        ref={passwordInput}
                        className={styles.login__input}
                        type="password"
                    />
                </div>
            </div>
            <div className="row align-items-center">
                <div 
                    className={
                        `col ${styles.login__submitCol}`
                    }
                >
                    <button
                        className={
                            `btn btn-primary ${styles.login__submit}`
                        }
                        onClick={() => onLoginClick()}
                    >
                        Log In
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login