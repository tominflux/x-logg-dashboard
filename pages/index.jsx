import { useSelector } from "react-redux"
import DashSummary from "../components/dashSummary"
import DashboardHead from "../components/head"
import { AUTH_STATE } from "../redux/reducers/auth"

const HomePage = () => {
    //Hooks
    const authState = useSelector(state => state.Auth.authState)
    //Getters
    const getDashSummary = () => (
        <section>
            <DashSummary />
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