import Head from 'next/head'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { AUTH_STATE } from '../../redux/reducers/auth'
import styles from './head.module.css'
import Logout from './logout'

const DashboardHead = () => {
    //Hooks
    const router = useRouter()
    const authState = useSelector(state => state.Auth.authState)
    //Effects
    // - Login Redirect
    React.useEffect(() => {
        const redirectToLogin = (
            router.pathname !== "/login" &&
            authState !== AUTH_STATE.LOGGED_IN
        )
        const redirectToHome = (
            router.pathname === "/login" &&
            authState === AUTH_STATE.LOGGED_IN
        )
        if (redirectToLogin) {
            console.log("Redirect to login")
            router.push("/login")
        }
        if (redirectToHome) {
            console.log("Redirect to home")
            router.push("/")
        }
    })
    //Render
    return (<>
        <Head>
            <title>
                Dashboard - [Sitename]
            </title>
            <link 
                rel="stylesheet" 
                href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" 
                integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" 
                crossOrigin="anonymous"
            />
        </Head>
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