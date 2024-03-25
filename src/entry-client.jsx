import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'

import App from './app'
import { routes } from './routes'
import { matchRoutes } from './helpers/match-routes'

function renderApp() {
  const path = window.location.pathname
  const match = matchRoutes(routes, path)

  if (match) {
    const Component = match.route.component
    const data = window.__DATA__

    hydrateRoot(document.getElementById('app'),
      <StrictMode>
        <App>
          <Component {...data} />
        </App>
      </StrictMode>
    )
  } else {
    console.error('No route matched.')
  }
}

if (typeof window !== 'undefined') {
  renderApp()
}
