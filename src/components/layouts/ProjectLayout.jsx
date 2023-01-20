import React from "react";
import BaseLayout from "./BaseLayout";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby"

function ProjectLayout({ title, image, alt, cleanHtml, download }) {
    const downloadLink = <div><Link to={"/"+download} className="no-decoration underline-on-hover">download report</Link></div>
    
    return (
        <>
            <BaseLayout>
                <div className="content">
                    <div className="box flex border">
                        <h1 className="center padding-2 display-text text-align-center">{title}</h1>
                    </div>
                    <div className="box border cover bio">
                        <div className="stack">
                            <div className="border box frame center">
                                <GatsbyImage image={image} alt={alt} />
                            </div> 
                            <div className="stack project" dangerouslySetInnerHTML={{__html: cleanHtml}} />
                        </div>
                    {downloadLink}
                    </div>
                </div>
            </BaseLayout>
        </>
    )
    
}

export default ProjectLayout