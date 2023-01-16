import React from "react";
import BaseLayout from "./BaseLayout";
import { GatsbyImage } from "gatsby-plugin-image";

function ProjectLayout({ image, alt, cleanHtml }) {
    
    return (
        <>
            <BaseLayout>
                <div className="content">
                    <div className="box border cover bio">
                        <div className="stack">
                            <div className="border box frame center">
                                <GatsbyImage image={image} alt={alt} />
                            </div> 
                            <div className="stack project" dangerouslySetInnerHTML={{__html: cleanHtml}} />
                        </div>
                    </div>
                </div>
            </BaseLayout>
        </>
    )
    
}

export default ProjectLayout