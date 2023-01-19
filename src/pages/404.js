import * as React from "react"
import BaseLayout from "../components/layouts/BaseLayout"
import "../css/index.css"

function NotFound() {
    return (
        <>
            <BaseLayout >
                    <div className="box flex border cover">
                        <h1 className="center padding-2 display-text text-align-center">page not found</h1>
                    </div>
            </BaseLayout>
        </>
    )
}

export default NotFound