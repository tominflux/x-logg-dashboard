const { default: AUTH_ACTIONS } = require("../../../redux/actions/auth")
import { useDispatch } from 'react-redux'
import styles from './logout.module.css'


const Logout = () => {
    //Hooks
    const dispatch = useDispatch()
    //Events
    const onClick = () => {
        const performLogout = async () => {
            //Send logout request.
            const apiPath = "/api/admin/logout"
            const response = await fetch(
                apiPath, {
                    method: "POST"
                }
            )
            if (!response.ok) {
                alert("Problem logging out.")
            } else {
                //Update auth state to "cookie invalid".
                //(equivalent to logged out)
                const logoutAction = AUTH_ACTIONS.logout()
                dispatch(logoutAction)
            }
        }
        performLogout()
    }
    //Render
    return (
        <span 
            className={styles.logout}
            onClick={() => onClick()}
        >
            [Log-Out]
        </span>
    )
}

export default Logout