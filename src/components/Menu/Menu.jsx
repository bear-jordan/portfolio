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
            return <div key={s.id}><Link className="no-decoration pointer underline-on-hover" to={"/"+s.frontmatter.slug}>{s.frontmatter.title}</Link></div>
        })

        const tableauList = data.filter(d => d.frontmatter.project_type==="tableau").map((s) => {
            return <div key={s.id}><Link className="no-decoration pointer underline-on-hover" to={"/"+s.frontmatter.slug}>{s.frontmatter.title}</Link></div>
        })

        const d3List = data.filter(d => d.frontmatter.project_type==="d3+react").map((s) => {
            return <div key={s.id}><Link className="no-decoration pointer underline-on-hover" to={"/"+s.frontmatter.slug}>{s.frontmatter.title}</Link></div>
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
                <div><a className="no-decoration pointer underline-on-hover" href="https://ugspub.nr.utah.gov/publications/open_file_reports/ofr-735.pdf">uranium and vanadium resources of utah</a></div>
                <div><a className="no-decoration pointer underline-on-hover" href="https://sales.wsgs.wyo.gov/preliminary-geologic-map-of-the-goat-mountain-quadrangle-albany-and-laramie-counties-wyoming-2021/">geology of goat mountain, wy</a></div>
                <div><a className="no-decoration pointer underline-on-hover" href="https://czo-archive.criticalzone.org/images/national/associated-files/Calhoun/jordan_barrett_c_202005_ms.pdf">geology of the calhoun critical zone observatory</a></div>
            </div>
            {/* {(if screen size between 750 and 1000 px add 2 empty divs)} */}
        </div>
    )
}

export default Menu