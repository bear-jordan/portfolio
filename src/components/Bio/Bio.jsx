import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"

function Bio({ data }) {

    return (
        <div className="box border cover bio">
            <div className="stack">
                <div className="border box frame center">
                    <GatsbyImage image={getImage(data.imageSharp)} alt="example" />
                </div> 
                <div className="stack border padding-0">
                    <h2>background</h2>
                    <p>Hi, I am a research scientist and data analyst from the southeastern United States. After 8 years collecting data in the field, I began studying how to best manage, analyze, and visualize these data. Over the past three years, I have produce numerous data cleaning and management utilities, visualizations, and statistical notebooks at work and for my personal projects.</p>
                    <p>Outside my life on the internet, I am passionate about field geology, volcanoes, and science outreach. I have been lucky to spend well over 2,000 hours performing geological field research in northern Manitoba, the western United States---Arizona, Colorado, Nevada, Utah, and Wyoming---and soon I will add New Zealand to this list!</p>
                </div>               
                <div className="stack border padding-0">
                    <h2>opportunities</h2>
                    <p>I am in the market for part-time and full-time opportunities in the data space. I offer expertise in modernizing data collection and management, designing static and interactive visualizations, and developing statistical notebooks for routine analysis.</p>
                    <p>If you are an environmental NGO, I am always happy to volunteer my time producing dashboards, data visualizations, and data management solutions. Please reach out. I'd love to hear from you!</p>
                </div>                    
            </div>
        </div>
    )
}

export default Bio