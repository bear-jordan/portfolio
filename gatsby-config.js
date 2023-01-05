/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `Bear`,
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `projects`,
                path: `${__dirname}/src/projects`,
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `img`,
                path: `${__dirname}/src/assets/img`,
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `docs`,
                path: `${__dirname}/src/assets/docs`,
            }
        },
        "gatsby-transformer-remark",
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
    ],
}
