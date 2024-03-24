import PropTypes from 'prop-types'

import { Layout } from './components/layout'

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './index.css'

App.propTypes = {
  children: PropTypes.node,
}

function App({ children }) {
  return <Layout>{children}</Layout>
}

export default App
