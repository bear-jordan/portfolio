import React from "react"
import { Link } from "gatsby"

function Project({index, image, title, link, scheme}) {
    
    return (
        <div className={"box border frame relative"+(scheme === "light" ? " invert" : "")}>
            <img src={image} alt="example" />
            <div className="absolute top-left">
                <h2 className="">0{index}</h2>
            </div>
            <div className="absolute center text-align-center bottom-center">
                <div className="">
                    <h3 className="">{title}</h3>
                    <div className={"button box center"+(scheme === "light" ? " invert" : "")}>
                        <a href="#">view project</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project