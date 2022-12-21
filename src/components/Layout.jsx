import React from "react"
import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <React.Fragment>
            <h2 className="logo">LyricsFinder</h2>
            <Outlet />
        </React.Fragment>
    )
}

export default Layout