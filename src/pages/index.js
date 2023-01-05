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
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            image {
              childImageSharp {
                gatsbyImageData(blurredOptions: {width: 1080}, placeholder: BLURRED)
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
          }
          html
          id
        }
      }
    }
  }
`

export default Home