import fs from 'fs'
import express from 'express'
import { createServer } from 'vite'

const app = express()

const vite = await createServer({
  server: {
    middlewareMode: true,
  },
  appType: 'custom',
})

app.use(vite.middlewares)

app.use('*', async (req, res) => {
  const url = req.originalUrl

  try {
    const { routes } = await vite.ssrLoadModule('/src/routes.js')
    const { matchRoutes } = await vite.ssrLoadModule('/src/helpers/match-routes.js')

    const branch = matchRoutes(routes, url)

    if (!branch || branch.length === 0) {
      res.status(404).send('Not Found')
      return
    }

    const { route, params } = branch
    const { getServerSideProps } = route.component

    let data = {};
    if (getServerSideProps) {
      const context = { query: req.query, params: params }
      const props = await getServerSideProps(context)
      data = props.data
    }

    const template = await vite.transformIndexHtml(url, fs.readFileSync('index.html', 'utf-8'))
    const { render } = await vite.ssrLoadModule('/src/entry-server.jsx')

    const script = `<script>window.__DATA__=${JSON.stringify(data)}</script>`
    const appHtml = await render(route.component, data)

    const html = template.replace('<!--slot-html-->', `${appHtml} ${script}`)
    res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
  } catch (error) {
    res.status(500).end(error)
  }
})

app.listen(4173, () => {
  console.log('http://localhost:4173.')
})

