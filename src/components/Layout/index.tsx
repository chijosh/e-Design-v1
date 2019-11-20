/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Header from '../Header'
import './layout.css'

interface Props {
	/** Header Title */
	children?: any
}

const Layout = ({ children }: Props) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)

	return (
		<>
			<Header siteTitle={data.site.siteMetadata.title} />

			<main>{children}</main>

			<footer>
				Chi Josh © {new Date().getFullYear()},{` `}
				<a href="https://www.gatsbyjs.org">Built with Gatsby</a>
			</footer>
		</>
	)
}

export default Layout
