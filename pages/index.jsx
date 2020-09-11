import { useSelector } from "react-redux"
import DashboardHead from "../components/head"
import { AUTH_STATE } from "../redux/reducers/auth"

const HomePage = () => {
    //Hooks
    const authState = useSelector(state => state.Auth.authState)
    //Getters
    const getDashSummary = () => (
        <section>
            <h1>
                Hello World
            </h1>
        </section>
    )
    const getLoadingDisplay = () => (
        <section>
            <p>
                Loading....
            </p>
        </section>
    )
    const getBody = () => {
        switch (authState) {
            case AUTH_STATE.LOGGED_IN:
                return getDashSummary()
            default:
                return getLoadingDisplay()
        }
    }
    //Render
    return (<>
        <DashboardHead />
        { getBody() }
    </>)
}

export default HomePage