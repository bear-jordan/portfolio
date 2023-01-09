import React from "react"
import Project from "../Project/Project"
import { getImage} from "gatsby-plugin-image"

function Projects({ data }) {

    const formattedData = data.map(d => {
        return (
            { 
                "date_created": d.node.frontmatter.date_created, 
                "title": d.node.frontmatter.title, 
                "slug": d.node.frontmatter.slug, 
                "scheme": d.node.frontmatter.scheme, 
                "image": getImage(d.node.frontmatter.image), 
                "id": d.node.id
            }
        )
    })

    const projectList = formattedData.map((d, i) => {
            return <Project key={d.id}
                index={i}
                image={d.image}
                title={d.title}
                slug={d.slug}
                scheme={d.scheme}/>
    })
    
    return (
        <div className="stack">
            {projectList.reverse()}
        </div>
    )
}

export default Projects