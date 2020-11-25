import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/seo';

import '../styles/globalStyles.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="content">
      <h1>Hi I'm Mo</h1>
      <h1>I'm a Software Engineer</h1>
    </div>
  </Layout>
)

export default IndexPage
