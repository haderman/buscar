import PropTypes from 'prop-types';
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './index.css'

App.propTypes = {
  data: PropTypes.any.isRequired,
}

function App({ data }) {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>
        hola
      </h1>
      <p className="read-the-docs">
        {JSON.stringify(data)}
      </p>
    </>
  )
}

export default App
