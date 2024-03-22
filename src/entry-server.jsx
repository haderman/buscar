import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'

import App from './app';

export function render(data) {
  return renderToString(
    <StrictMode>
      <App data={data} />
    </StrictMode>,
  )
}
