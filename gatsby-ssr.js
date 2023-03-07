/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */

import React from 'react'
import Layout from './src/components/Layout/Layout'

export const onRenderBody = ({ setHtmlAttributes }) => {
    setHtmlAttributes({ lang: `en` })
}

export const wrapPageElement = ({ element }) => {
    return (
        <Layout>
            {element}
        </Layout>
    )
}