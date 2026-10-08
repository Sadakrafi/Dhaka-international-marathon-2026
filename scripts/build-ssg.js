import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dist = path.resolve(__dirname, '../dist')
const distServer = path.resolve(__dirname, '../dist-server')

const routes = [
  '/',
  '/about',
  '/events',
  '/contact',
  '/blog',
  '/refund-policy',
  '/delivery-policy',
  '/terms-conditions'
];

async function generate() {
  const template = fs.readFileSync(path.resolve(dist, 'index.html'), 'utf-8')
  
  // Import the SSR bundle
  const { render } = await import('file://' + path.resolve(distServer, 'entry-server.js'))

  for (const route of routes) {
    try {
      const appHtml = await render(route)
      
      // Inject the rendered HTML into the template
      const html = template.replace(
        `<div id="root"></div>`,
        `<div id="root">${appHtml}</div>`
      )
      
      let outputPath = path.join(dist, route)
      if (route !== '/') {
        fs.mkdirSync(outputPath, { recursive: true })
        outputPath = path.join(outputPath, 'index.html')
      } else {
        outputPath = path.join(dist, 'index.html')
      }
      
      fs.writeFileSync(outputPath, html)
      console.log(`Pre-rendered route: ${route}`)
    } catch (e) {
      console.error(`Failed to prerender ${route}`, e)
      process.exit(1)
    }
  }
}

generate().catch(e => {
  console.error(e)
  process.exit(1)
})
