import PropTypes from 'prop-types'

ItemsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

function ItemsPage({ data }) {
  return (
    <div>
      <h1>Item Details</h1>
      <p>{JSON.stringify(data)}</p>
    </div>
  )
}

export default ItemsPage;

export async function getServerSideProps(context) {
  const { id } = context.params
  const data = await fetchItemById(id)
  const description = await fetchItemDescriptionById(id)
  return { data, description }
}

async function fetchItemById(id) {
  let url = new URL(id, API_URL)
  const response = await fetch(url)
  const data = await response.json()
  return { item: data, id }
}

async function fetchItemDescriptionById(id) {
  let url = new URL(`${id}/description`, API_URL)
  const response = await fetch(url)
  const data = await response.json()
  console.log('-> fetchItemDescriptionById: ', data)
  return { description: data }
}

const API_URL = 'https://api.mercadolibre.com/items/'
