import { graphql } from "gatsby"
import * as React from "react"
import ProjectLayout from "../../components/layouts/ProjectLayout"
import { getImage } from "gatsby-plugin-image"
import "../../css/index.css"

function volcanicSeismicity({ data }) {
    console.log(data)
    const rawHtml = data.markdownRemark.html

    let re1 = /(?=<h1>)/g
    let cleanHtml = rawHtml.replace(re1, `<div class="stack border padding-0">`)
    let re2 = /(?=<h2>)/g
    
    cleanHtml = cleanHtml.replace(re2, `</div><div class="stack border padding-0">`)
    cleanHtml = cleanHtml+`</div>`
    
    return (
        <>
            <ProjectLayout title={data.markdownRemark.frontmatter.title}
                image={getImage(data.markdownRemark.frontmatter.image)}
                alt={data.markdownRemark.frontmatter.alt}
                cleanHtml={cleanHtml} 
                download={data.markdownRemark.frontmatter.download} />
        </>
    )
}

export const query = graphql`
query CovidQuery {
    markdownRemark(id: {eq: "dcdf5b27-0bb9-5f12-a324-4da5436c760d"}) {
        html
        frontmatter {
            image {
                childImageSharp {
                    gatsbyImageData(placeholder: BLURRED, transformOptions: {fit: FILL})
                }
            }
            collaborators
            date_created
            duration
            my_role
            project_type
            scheme
            slug
            stack
            title
            alt
            download
        }
    }
}
`

export default volcanicSeismicity