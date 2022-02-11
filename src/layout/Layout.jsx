import React from 'react'
import Spinner from '../components/Spinner/Spinner'
import Toast from '../components/Toast/Toast'

const Layout = ({children}) => {

    return (
        <>
        <Spinner/>
        <Toast/>
        {children}
        </>
    )
}

export default Layout
