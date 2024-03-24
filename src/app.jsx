import PropTypes from 'prop-types'

import { Layout } from './components/layout'

App.propTypes = {
  children: PropTypes.node,
}

function App({ children }) {
  return <Layout>{children}</Layout>
}

export default App
