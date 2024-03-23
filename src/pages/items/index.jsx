import PropTypes from 'prop-types'
import { Search } from '../../components/search'

ItemsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

function ItemsPage({ data }) {
  return (
    <div>
      <Search />
      <h1>Items</h1>
      <p>{JSON.stringify(data)}</p>
    </div>
  )
}

export default ItemsPage;

export async function getServerSideProps(context) {
  const { search } = context.query
  console.log('-> getServerSideProps: ', search)
  const data = await fetchItems(search)
  return { data }
}

const API_URL = 'https://api.mercadolibre.com/sites/MLA/search?q='
async function fetchItems(query) {
  let url = new URL(API_URL)
  url.searchParams.append('q', query)
  const response = await fetch(url)
  const data = await response.json()
  const items = data.results.slice(0, 4)
  return { items, query }
}
