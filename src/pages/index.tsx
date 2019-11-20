import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import HomePage from './HomePage'
// import Image from '../components/Image/image'
import SEO from '../components/Seo'

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<HomePage />
		<Link to="/page-2/">Go to page 2</Link>
	</Layout>
)

export default IndexPage
