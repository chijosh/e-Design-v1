import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import HomePage from './HomePage'
import SEO from '../components/Seo'

<<<<<<< Updated upstream
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomePage />
  </Layout>
)
=======
const IndexPage = () => {
	return (
		<Layout>
			<SEO title="Home" />
			<HomePage />
			<Link to="/404">About</Link>
		</Layout>
	)
}
>>>>>>> Stashed changes

export default IndexPage
