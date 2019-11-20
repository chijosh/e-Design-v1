/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'

import './Layout.scss'

interface Props {
	children?: any
}

const Layout = ({ children }: Props) => {
	return (
		<>
			<div>
				<main>{children}</main>
				<footer>
					Chi Josh © {new Date().getFullYear()},{` `}
					<a href="https://www.gatsbyjs.org">Built with Gatsby</a>
				</footer>
			</div>
		</>
	)
}

export default Layout
