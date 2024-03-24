import PropTypes from 'prop-types'

App.propTypes = {
  children: PropTypes.node,
}

function App({ children }) {
  return children
}

export default App
