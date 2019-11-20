import React from 'react'
import { Link } from 'gatsby'

interface Props {
	// /**Header Title */
	siteTitle: string
}

const Header = ({ siteTitle }: Props) => (
	<header>
		<h1>
			<Link
				to="/"
				style={{
					color: `white`,
					textDecoration: `none`,
				}}
			>
				{siteTitle}
			</Link>
		</h1>
	</header>
)

export default Header
