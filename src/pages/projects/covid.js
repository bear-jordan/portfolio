import { graphql } from "gatsby"
import * as React from "react"
import BaseLayout from "../../components/layouts/BaseLayout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "../../css/index.css"

function covid({ data }) {
    const rawHtml = data.markdownRemark.html
    console.log(rawHtml)

    // (?=\<h2\>) start of div.box
    let re1 = /(?=\<h1\>)/g
    let cleanHtml = rawHtml.replace(re1, `<div class="stack border padding-0">`)
    
    // (?=\<h2\>) end of div.box and start of div.box
    let re2 = /(?=\<h2\>)/g
    cleanHtml = cleanHtml.replace(re2, `</div><div class="stack border padding-0">`)
    
    // str+"div.box" end of div.box at end of text
    cleanHtml = cleanHtml+`</div>`
    
    return (
        <>
            <BaseLayout >
            <div className="box border cover bio">
                <div className="stack">
                    <div className="border box frame center">
                        <GatsbyImage image={getImage(data.markdownRemark.frontmatter.image)} alt="example" />
                    </div> 
                    <div className="stack project" dangerouslySetInnerHTML={{__html: cleanHtml}} />
                </div>
            </div>
            </BaseLayout>
        </>
    )
}

export const query = graphql`
query CovidQuery {
    markdownRemark(id: {eq: "38f1aaa8-8457-5301-9bcb-fbefe19042c2"}) {
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
        }
    }
}
`

export default covid