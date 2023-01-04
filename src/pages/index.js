import * as React from "react"
import BaseLayout from "../components/layouts/BaseLayout"
import Projects from "../components/Projects/Projects"
import "../css/index.css"

function Home() {
  return (
    <>
        <BaseLayout >
            <Projects />
        </BaseLayout>
    </>
  )
}

export default Home