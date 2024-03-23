import PropTypes from 'prop-types'

ItemsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

function ItemsPage({ data }) {
  return (
    <div>
      <h1>Items</h1>
      <p>{JSON.stringify(data)}</p>
    </div>
  )
}

export default ItemsPage;

export async function getServerSideProps(context) {
  const { search } = context.query
  const data = await fetchItems(search)
  return { data }
}

async function fetchItems(query) {
  return { items: [], query }
}
