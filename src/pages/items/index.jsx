import PropTypes from 'prop-types'
import { Layout } from '../../components/layout'
import { Card } from '../../components/card'
import { Currency } from '../../components/currency'
import * as api from '../../api'

ItemsPage.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  currencyData: PropTypes.object.isRequired,
  query: PropTypes.string.isRequired,
}

function ItemsPage(props) {
  return (
    <Layout searchProps={{ defaultValue: props.query }}>
      <ol className="search-results-list">
        {props.items.map((item) => {
          return (
            <li key={item.id}>
              <Card
                id={item.id}
                title={item.title}
                price={
                  <Currency
                    id={props.currencyData.id}
                    value={item.price}
                    symbol={props.currencyData.symbol}
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
  const data = await api.searchItems(search)
  return data
}
