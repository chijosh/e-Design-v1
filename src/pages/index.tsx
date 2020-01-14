import React from 'react'

import Layout from '../components/Layout'
import HomePage from './HomePage'
import SEO from '../components/Seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomePage />
  </Layout>
)

export default IndexPage
