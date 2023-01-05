import * as React from "react"
import BaseLayout from "../components/layouts/BaseLayout"
import Bio from "../components/Bio/Bio"
import "../css/index.css"
import { graphql } from "gatsby"

function About({data}) {
    return (
        <>
            <BaseLayout >
                <Bio data = {data}/>
            </BaseLayout>
        </>
  )
}

export const query = graphql`
query BioQuery {
    imageSharp(children: {}, id: {eq: "f0ccbb5e-5c48-56a3-99b8-1870d7e65d1b"}) {
      id
      gatsbyImageData(
        blurredOptions: {width: 1080}
        placeholder: BLURRED
        aspectRatio: 1.778
        transformOptions: {fit: FILL}
      )
    }
  }
`

export default About