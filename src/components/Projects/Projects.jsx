import React from "react"
import Project from "../Project/Project"
import { getImage} from "gatsby-plugin-image"

function Projects({ data }) {
    console.log(data)

    const formattedData = data.map(d => {
        return (
            {
                "collaborators": d.node.frontmatter.collaborators, 
                "date_created": d.node.frontmatter.date_created, 
                "duration": d.node.frontmatter.duration, 
                "title": d.node.frontmatter.title, 
                "stack": d.node.frontmatter.stack, 
                "slug": d.node.frontmatter.slug, 
                "scheme": d.node.frontmatter.scheme, 
                "project_type": d.node.frontmatter.project_type, 
                "my_role": d.node.frontmatter.my_role, 
                "image": getImage(d.node.frontmatter.image), 
                "html": d.node.html,
                "id": d.node.id
            }
        )
    })

    console.log(formattedData)

    function genKey() {
        return Math.floor(Math.random()*100000)
    }

    const projects = [
        {
            image: "src/assets/img/ds-jaime-dantas--mXlubcOD58-unsplash.jpg",
            title: "volcano-seismic classification",
            link: "#",
            scheme: "light"
            
        },
        {
            image: "src/assets/img/ds-matt-burke-jCVIqVVE7yE-unsplash.jpg",
            title: "covid traffic impacts",
            link: "#",
            scheme: "light"
            
        },
    ]

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