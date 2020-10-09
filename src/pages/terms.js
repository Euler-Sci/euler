import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Terms from '../components/terms'

const TermsPage = () => {
  return (
    <Layout>
      <SEO title="Terms & Conditions" />
      <br/>
      <Terms />
    </Layout>
  )
}

export default TermsPage
