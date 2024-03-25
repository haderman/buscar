import PropTypes from 'prop-types'
import { Search } from './search'

export function Layout({ children, searchProps }) {
  return (
    <>
      <header key="header">
        <div className="nav-search-container">
          <a href="/">
            <img src="/logo.webp" alt="Logo" />
          </a>
          <Search {...searchProps} />
        </div>
      </header>
      <main>
        {children}
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  searchProps: PropTypes.shape(Search.propTypes),
}
