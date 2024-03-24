import PropTypes from 'prop-types'
import { Search } from './search'

export function Layout({ children, searchProps }) {
  return (
    <div>
      <header key="header">
        <a href="/">
          <img src="/logo.webp" alt="Logo" />
        </a>
        <Search {...searchProps} />
      </header>
      <main>
        {children}
      </main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  searchProps: PropTypes.shape(Search.propTypes),
}
