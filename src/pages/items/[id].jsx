import PropTypes from 'prop-types'
import { Layout } from '../../components/layout'
import { Currency } from '../../components/currency'

ItemsPage.propTypes = {
  data: PropTypes.object.isRequired,
  descriptionData: PropTypes.object.isRequired,
  currencyData: PropTypes.object.isRequired,
}

function ItemsPage(props) {
  const imgSrc = props.data.pictures[0].url
  return (
    <Layout>
      <article className="item-detail-card">
        <div className="item-detail-card-main">
          <img src={imgSrc} alt={props.data.title} />
          <div className="item-buy-card">
            <h1>{props.data.title}</h1>
            <Currency
              id={props.currencyData.id}
              value={props.data.price}
              symbol={props.currencyData.symbol}
            />
            <button>Comprar</button>
          </div>
        </div>
        <div>
          <h2>Description del producto</h2>
          <p>
            {props.descriptionData.plain_text}
          </p>
        </div>
      </article>
    </Layout>
  )
}

export default ItemsPage;

export async function getServerSideProps(context) {
  const { id } = context.params
  const data = await fetchItemById(id)
  const descriptionData = await fetchItemDescriptionById(id)
  const currencyData = await fetchCurrency(data.site_id)
  return { data, descriptionData, currencyData }
}

async function fetchItemById(id) {
  let url = new URL(id, API_URL)
  const response = await fetch(url)
  const data = await response.json()
  return data
}

async function fetchItemDescriptionById(id) {
  let url = new URL(`${id}/description`, API_URL)
  const response = await fetch(url)
  const data = await response.json()
  return data
}

let currencyCache = {}
async function fetchCurrency(siteId) {
  if (currencyCache[siteId]) {
    return currencyCache[siteId]
  }

  const siteResponse = await fetch(`https://api.mercadolibre.com/sites/${siteId}`)
  const siteData = await siteResponse.json()
  const currencyId = siteData.default_currency_id
  const currencyResponse = await fetch(`https://api.mercadolibre.com/currencies/${currencyId}`)
  const currencyData = await currencyResponse.json()
  currencyCache[siteId] = currencyData
  return currencyData
}


const API_URL = 'https://api.mercadolibre.com/items/'
