import { Provider } from 'react-redux'
import { useStore } from '../redux/store'

const DashboardApp = ({Component, pageProps}) => {
    const store = useStore(pageProps.initialReduxState)
    //Render
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
}

export default DashboardApp