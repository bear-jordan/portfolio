import { graphql } from "gatsby"
import * as React from "react"
import BaseLayout from "../components/layouts/BaseLayout"
import Projects from "../components/Projects/Projects"
import "../css/index.css"

function Home({ data }) {

    return (
        <>
            <BaseLayout >
                <Projects data={data.allMarkdownRemark.edges} />
            </BaseLayout>
        </>
    )
}

export const query = graphql`
query ProjectsQuery {
    allMarkdownRemark(sort: {frontmatter: {date_created: ASC}}
        filter: {frontmatter: {draft: {eq: false}}}) {
      edges {
        node {
          frontmatter {
            image {
              childImageSharp {
                gatsbyImageData(blurredOptions: {width: 1080}, placeholder: BLURRED, transformOptions: {fit: FILL})
                id
              }
            }
            collaborators
            date_created
            duration
            title
            stack
            slug
            scheme
            project_type
            my_role
            alt
          }
          html
          id
        }
      }
    }
  }
`

export default Home