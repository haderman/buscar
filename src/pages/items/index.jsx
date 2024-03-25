import PropTypes from 'prop-types'
import { Layout } from '../../components/layout'
import { Card } from '../../components/card'
import { Currency } from '../../components/currency'

ItemsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

function ItemsPage(props) {
  console.log('props: ', props.data.currencyData)
  return (
    <Layout searchProps={{ defaultValue: props.data.query }}>
      <ol className="search-results-list">
        {props.data.items.map((item) => {
          return (
            <li key={item.id}>
              <Card
                id={item.id}
                title={item.title}
                price={
                  <Currency
                    id={props.data.currencyData.id}
                    value={item.price}
                    symbol={props.data.currencyData.symbol}
                  />
                }
                currencyId={item.currency_id}
                picture={item.thumbnail}
                condition={item.condition}
                freeShipping={item.shipping.free_shipping}
              />
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default ItemsPage;

export async function getServerSideProps(context) {
  const { search } = context.query
  const data = await fetchItems(search)
  return data
}

const API_URL = 'https://api.mercadolibre.com/sites/MLB/search?q='
async function fetchItems(query) {
  let url = new URL(API_URL)
  url.searchParams.append('q', query)
  const response = await fetch(url)
  const data = await response.json()
  const items = data.results.slice(0, 4)
  const currencyData = await fetchCurrency(data.site_id)
  return { items, query, currencyData }
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

/**

{
  categories: string[],
  items: [
    {
      id: string,
      title: string,
      price: {
        currency: string,
        amount: number,
        decimals: number
      },
      picture: string,
      condition: string,
      free_shipping: boolean
    }
  ]
}

 */
