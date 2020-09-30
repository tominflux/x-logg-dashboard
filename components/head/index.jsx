import React from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import styles from './head.module.css'
import Logout from './logout'

const DashboardHead = () => {
    //Hooks
    const router = useRouter()
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
    return (<>
        <header className={styles.header}>
            <div className="row align-items-center">
                <div className="col-md-3 text-center">
                    [Icon]
                </div>
                <div className="col-md-3 text-center">
                    <h1 className={styles.header__heading}>
                        [Sitename] Dashboard
                    </h1>
                </div>
                <div className="col-md-3">
                    <span className={styles.header__welcome}>
                        Welcome [Admin Name]
                    </span>
                </div>
                <div className="col-md-3 text-center">
                    <Logout />
                </div>
            </div>
        </header>
    </>)
}

export default DashboardHead