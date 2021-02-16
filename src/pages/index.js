import React from 'react';
import SEO from '../components/seo';
import Home from '../components/Home/index.tsx';

import '../styles/globalStyles.css';

const App = () => {
  return (
  <>
    <SEO title="App" />
    <Home />
  </>
  )
};

export default App;
