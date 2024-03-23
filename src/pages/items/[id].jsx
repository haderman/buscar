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
  return { data }
}

async function fetchItemById(id) {
  return { item: {}, id }
}
