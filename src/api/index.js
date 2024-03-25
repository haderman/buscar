const API_URL = 'https://api.mercadolibre.com'

const ENDPOINT_SEARCH = new URL('sites/MLA/search', API_URL)
const ENDPOINT_ITEMS = new URL('items/', API_URL)
const ENDPOINT_CURRENCIES = new URL('currencies/', API_URL)
const ENDPOINT_SITES = new URL('sites/', API_URL)


export async function searchItems(query) {
  let url = new URL(ENDPOINT_SEARCH)
  url.searchParams.append('q', query)
  const response = await fetch(url)
  const data = await response.json()
  const items = data.results.slice(0, 4)
  const currencyData = await fetchCurrency(data.site_id)
  return { items, query, currencyData }
}

let currencyCache = {}
export async function fetchCurrency(siteId) {
  if (currencyCache[siteId]) {
    return currencyCache[siteId]
  }

  const siteResponse = await fetch(new URL(siteId, ENDPOINT_SITES))
  const siteData = await siteResponse.json()
  const currencyId = siteData.default_currency_id
  const currencyResponse = await fetch(new URL(currencyId, ENDPOINT_CURRENCIES))
  const currencyData = await currencyResponse.json()
  currencyCache[siteId] = currencyData
  return currencyData
}

export async function fetchItemById(id) {
  const response = await fetch(new URL(id, ENDPOINT_ITEMS))
  const data = await response.json()
  return data
}

export async function fetchItemDescriptionById(id) {
  let url = new URL(`${id}/description`, ENDPOINT_ITEMS)
  const response = await fetch(url)
  const data = await response.json()
  return data
}
