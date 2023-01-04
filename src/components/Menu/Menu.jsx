import * as React from "react"
import { ReactDOM } from "react";

function Menu({showMenu}) {
    return (
        <div id="header-menu" className={"grid"+(showMenu ? "" : " hidden")}>
            <div className="border padding-0">
                <h4>d3.js + react</h4>
                <p>coming soon</p>
            </div>
            <div className="border padding-0">
                <h4>tableau</h4>
                <p>coming soon</p>
            </div>
            <div className="border padding-0">
                <h4>statistics</h4>
                <p>coming soon</p>
            </div>
            <div className="border padding-0">
                <h4>publications</h4>
                <p>coming soon</p>
            </div>
            {/* {(if screen size between 750 and 1000 px add 2 empty divs)} */}
        </div>
    )
}

export default Menu