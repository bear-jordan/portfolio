import * as React from "react"
import { Link } from "gatsby"

function Footer() {
    return (
        <footer className="box invert">
            <div className="flex stack-row">
                <a className="footer-link no-decoration" href="mailto: bearjordan@gmail.com" target="_blank">email</a>
                <a className="footer-link no-decoration" href="https://github.com/bear-jordan" target="_blank">github</a>
                <a className="footer-link no-decoration" href="https://www.linkedin.com/in/bear-jordan/" target="_blank">linkedin</a>
                <Link to="/bear-jordan-resume.pdf" className="footer-link no-decoration">resume</Link>
            </div>
        </footer>
    )
}

export default Footer