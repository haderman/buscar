import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'

import App from './app'

export async function render(Component, data) {
  return renderToString(
    <StrictMode>
      <App>
        <Component {...data} />
      </App>
    </StrictMode>,
  )
}
