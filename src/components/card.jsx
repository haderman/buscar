import PropTypes from 'prop-types'

export function Card(props) {
  const itemUrl = `/items/${props.id}`
  return (
    <article className="list-item-card">
      <img src={props.picture} alt={props.title} />
      <div className="details">
        {props.price}
        <a href={itemUrl} data-name="title">
          <h2>{props.title}</h2>
        </a>
      </div>
    </article>
  )
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.node.isRequired,
  picture: PropTypes.string.isRequired,
  condition: PropTypes.string,
  freeShipping: PropTypes.bool,
  currencyId: PropTypes.string,
}
