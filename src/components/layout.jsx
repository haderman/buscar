import PropTypes from 'prop-types'
import { Search } from './search'

export function Layout({ children }) {
  return (
    <div>
      <header>
        <Search />
      </header>
      <main>
        {children}
      </main>
    </div>
  )
}

Layout.propTypes = {
   children: PropTypes.node.isRequired,
}
