import PropTypes from 'prop-types'
import { formatCurrency, formatCurrencyWithLocale } from '../helpers/format-currency'

export function Currency(props) {
  const humanReadablePrice = formatCurrency(props.id, props.value)
  const formattedValue = formatCurrencyWithLocale(props.id, props.value)
  return (
    <data value={humanReadablePrice}>
      {props.symbol} {formattedValue}
    </data>
  )
}

Currency.propTypes = {
  value: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  symbol: PropTypes.string,
}
