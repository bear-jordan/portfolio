import { graphql } from "gatsby"
import * as React from "react"
import BaseLayout from "../../components/layouts/BaseLayout"
import "../../css/index.css"

function volcanicSeismicty({ data }) {
    console.log(data)
    return (
        <>
            <BaseLayout >
                <p>volcanic sesimicity</p>
            </BaseLayout>
        </>
    )
}

export const query = graphql`
query VolcanoQuery {
    markdownRemark(id: {eq: "dcdf5b27-0bb9-5f12-a324-4da5436c760d"}) {
        html
    }
}
`

export default volcanicSeismicty