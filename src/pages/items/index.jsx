import PropTypes from 'prop-types'
import { Layout } from '../../components/layout';

ItemsPage.propTypes = {
  data: PropTypes.object.isRequired,
  query: PropTypes.string,
}

function ItemsPage(props) {
  console.log(props.data)
  return (
    <Layout searchProps={{ defaultValue: props.data.query }}>
      <div>
        <h1>Items - {props.data.query}</h1>
        <p>{JSON.stringify(props.data.items)}</p>
      </div>
    </Layout>
  )
}

export default ItemsPage;

export async function getServerSideProps(context) {
  const { search } = context.query
  const data = await fetchItems(search)
  return data
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
