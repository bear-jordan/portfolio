import React from "react"
import Project from "../Project/Project"

function Projects() {
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

    const projectList = projects.map((d, i) => {
            return <Project key={genKey()}
                index={i}
                image={d.image}
                title={d.title}
                link={d.link}
                scheme={d.scheme}/>
    })
    
    return (
        <div className="stack">
            {projectList.reverse()}
        </div>
    )
}
 
export default Projects