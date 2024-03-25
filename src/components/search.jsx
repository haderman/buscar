import PropTypes from 'prop-types'
import { IconSearch } from './icon-search'

export function Search(props) {
  return (
    <form className="search" role="search" method="GET" action="/search">
      <label htmlFor="navbar-search" className="visually-hidden">
        Ingresa lo que quieras encontrar
      </label>
      <input
        id="navbar-search"
        type="text"
        name="search"
        autoComplete="on"
        placeholder="Buscar productos"
        autoCapitalize="off"
        autoCorrect="off"
        spellCheck="false"
        defaultValue={props.defaultValue}
      />
      <button type="submit">
        <IconSearch />
      </button>
    </form>
  )
}

Search.propTypes = {
  defaultValue: PropTypes.string
}
