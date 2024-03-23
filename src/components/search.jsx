export function Search() {
  return (
    <form role="search" method="GET" action="/search">
      <label>Ingresa lo que quieras encontrar</label>
      <input
        type="search"
        name="search"
        autoComplete="on"
        placeholder="Buscar productos"
        autoCapitalize="off"
        autoCorrect="off"
        spellCheck="false"
      />
      <button type="submit">Buscar</button>
    </form>
  )
}
