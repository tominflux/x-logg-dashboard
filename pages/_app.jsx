import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import AuthCheck from '../components/authCheck'
import AppContainer from '../components/appContainer'
import { useStore } from '../redux/store'
import Head from 'next/head'

const DashboardApp = ({Component, pageProps}) => {
    const store = useStore(pageProps.initialReduxState)
    //Render
    return (
        <Provider store={store}>
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
            <AuthCheck />
            <AppContainer>
                <Component {...pageProps} />
            </AppContainer>
        </Provider>
    )
}

DashboardApp.propTypes = {
    Component: PropTypes.node,
    pageProps: PropTypes.object
}

export default DashboardApp
