import PropTypes from 'prop-types'
import { Layout } from '../../components/layout'
import { Currency } from '../../components/currency'
import * as api from '../../api'

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
  const data = await api.fetchItemById(id)
  const descriptionData = await api.fetchItemDescriptionById(id)
  const currencyData = await api.fetchCurrency(data.site_id)
  return { data, descriptionData, currencyData }
}
