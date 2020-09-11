import { Provider } from 'react-redux'
import AuthCheck from '../components/authCheck'
import AppContainer from '../components/appContainer'
import { useStore } from '../redux/store'

const DashboardApp = ({Component, pageProps}) => {
    const store = useStore(pageProps.initialReduxState)
    //Render
    return (
        <Provider store={store}>
            <AuthCheck />
            <AppContainer>
                <Component {...pageProps} />
            </AppContainer>
        </Provider>
    )
}

export default DashboardApp