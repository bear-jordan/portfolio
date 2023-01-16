import * as React from "react"
import Menu from "../Menu/Menu"
import { useState } from 'react'
import { Link } from "gatsby"


function Header() {
    const [showMenu, setShowMenu] = useState(false)

    function handleClick() {
        const newState = showMenu === true ? false : true
        setShowMenu(newState)
    }

    return (
        <header className="box border">
            <div className="flex justify-content-between align-items-center center limit-width-00 fixed">
                <div className="flex justify-content-start side-item">
                    <div className={"pointer header-button "+(showMenu ? " header-button-border" : "")} onClick={handleClick}>
                        projects
                    </div>
                </div>
                <div>
                    <Link to="/" className="no-decoration"><h1>bear jordan</h1></Link>
                </div>
                <div className="flex side-item justify-content-end">
                    <div className="header-button">
                        <Link to="/about" className="no-decoration">about</Link>
                    </div>
                </div>
                
            </div>
            <Menu showMenu={showMenu}/>
        </header>
    )
}

export default Header