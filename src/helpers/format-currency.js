export function formatCurrency(currencyId, value) {
  const [currencySingular, currencyPlural] = currencyMap[currencyId] || ['currency', 'currencies']
  const currencyName = value === 1 ? currencySingular : currencyPlural
  return `${value} ${currencyName}`
}

export function formatCurrencyWithLocale(currencyId, value) {
  const locale = currencyLocaleMap[currencyId] || 'en-US'
  return Intl.NumberFormat(locale).format(value)
}

const currencyMap = {
  'ARS': ['peso', 'pesos'],
  'BRL': ['real', 'reales'],
  'SOL': ['sol', 'soles'],
  'BOB': ['boliviano', 'bolivianos'],
  'CLP': ['peso', 'pesos'],
  'COP': ['peso', 'pesos'],
  'CRC': ['colón', 'colones'],
  'CUC': ['peso convertible', 'pesos convertibles'],
  'CUP': ['peso', 'pesos'],
  'DOP': ['peso', 'pesos'],
  'EUR': ['euro', 'euros'],
  'GTQ': ['quetzal', 'quetzales'],
  'HNL': ['lempira', 'lempiras'],
  'MXN': ['peso', 'pesos'],
  'NIO': ['córdoba', 'córdobas'],
  'PAB': ['balboa', 'balboas'],
  'PEN': ['sol', 'soles'],
  'PYG': ['guaraní', 'guaraníes'],
  'USD': ['dólar', 'dólares'],
  'UYU': ['peso', 'pesos'],
  'VEF': ['bolívar', 'bolívares'],
  'VES': ['bolívar', 'bolívares']
};

const currencyLocaleMap = {
  'ARS': 'es-AR',
  'BRL': 'pt-BR',
  'SOL': 'es-PE',
  'BOB': 'es-BO',
  'CLP': 'es-CL',
  'COP': 'es-CO',
  'CRC': 'es-CR',
  'CUC': 'es-CU',
  'CUP': 'es-CU',
  'DOP': 'es-DO',
  'EUR': 'de-DE',
  'GTQ': 'es-GT',
  'HNL': 'es-HN',
  'MXN': 'es-MX',
  'NIO': 'es-NI',
  'PAB': 'es-PA',
  'PEN': 'es-PE',
  'PYG': 'es-PY',
  'USD': 'en-US',
  'UYU': 'es-UY',
  'VEF': 'es-VE',
  'VES': 'es-VE',
};
