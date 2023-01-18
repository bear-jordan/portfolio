import React from "react"
import { Link } from "gatsby"
import { GatsbyImage} from "gatsby-plugin-image"

function Project({index, image, title, slug, scheme, alt}) {
    
    return (
        <div className={"box border frame relative"+(scheme === "light" ? " invert" : "")}>
            <GatsbyImage image={image} alt={alt} />
            <div className="absolute top-left">
                <h2 className="">0{index}</h2>
            </div>
            <div className="absolute center text-align-center bottom-center">
                <div className="">
                    <h3 className="">{title}</h3>
                    <div className={"button box center"+(scheme === "light" ? " invert" : "")}>
                        <Link to={slug}>view project</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project