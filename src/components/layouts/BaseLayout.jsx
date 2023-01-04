import React from "react";
import Header from "../Header/Header"
import Menu from "../Menu/Menu"
import Footer from "../Footer/Footer"

function BaseLayout({ children }) {
    
    return (
        <>
            <Header />
            <Menu />
            <div className="content">
                { children }
            </div>
            <Footer />
        </>
    )
    
}

export default BaseLayout