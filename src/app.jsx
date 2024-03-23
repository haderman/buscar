import PropTypes from 'prop-types'
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './index.css'

App.propTypes = {
  children: PropTypes.node,
}

function App({ children }) {
  return children
}

export default App
