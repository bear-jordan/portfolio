import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

function Menu({ showMenu }) {

    const data = useStaticQuery(graphql`
        query MenuQuery {
            allMarkdownRemark {
                nodes {
                    frontmatter {
                        title
                        slug
                        project_type
                    }
                    id
                }
            }
        }
        `).allMarkdownRemark.nodes

        const statisticsList = data.filter(d => d.frontmatter.project_type==="statistics").map((s) => {
            return <p key={s.id}><Link className="no-decoration pointer underline-on-hover" to={"/"+s.frontmatter.slug}>{s.frontmatter.title}</Link></p>
        })

        const tableauList = data.filter(d => d.frontmatter.project_type==="tableau").map((s) => {
            return <p key={s.id}><Link className="no-decoration pointer underline-on-hover" to={"/"+s.frontmatter.slug}>{s.frontmatter.title}</Link></p>
        })

        const d3List = data.filter(d => d.frontmatter.project_type==="d3+react").map((s) => {
            return <p key={s.id}><Link className="no-decoration pointer underline-on-hover" to={"/"+s.frontmatter.slug}>{s.frontmatter.title}</Link></p>
        })

    return (
        <div id="header-menu" className={"grid"+(showMenu ? "" : " hidden")}>
            <div className="border padding-0">
                <h4>d3.js + react</h4>
                <p>coming soon</p>
            </div>
            <div className="border padding-0">
                <h4>tableau</h4>
                <p>coming soon</p>
            </div>
            <div className="border padding-0">
                <h4>statistics</h4>
                {statisticsList}
            </div>
            <div className="border padding-0">
                <h4>publications</h4>
                <p>coming soon</p>
            </div>
            {/* {(if screen size between 750 and 1000 px add 2 empty divs)} */}
        </div>
    )
}

export default Menu