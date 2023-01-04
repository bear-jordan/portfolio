import * as React from "react"
import BaseLayout from "../components/layouts/BaseLayout"
import Bio from "../components/Bio/Bio"
import "../css/index.css"

function About() {
  return (
    <>
        <BaseLayout >
            <Bio />
        </BaseLayout>
    </>
  )
}

export default About