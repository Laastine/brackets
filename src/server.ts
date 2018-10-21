import * as bodyParser from 'body-parser'
import * as express from 'express'
import * as path from 'path'

const staticAssetRoute = express.Router()

const bundleJsFilePath = path.resolve(`${__dirname}/../.generated/bundle.js`)
const indexHtml = path.resolve(`${__dirname}/../index.html`)

const serveStaticResource = (filePath: string) => (req: any, res: any, next: any) => {
  res.sendFile(filePath)
}

staticAssetRoute.get('/', serveStaticResource(indexHtml))
staticAssetRoute.get('/bundle.js', serveStaticResource(bundleJsFilePath))

class Server {
  public app: express.Application

  constructor() {
    this.app = express()
    this.config()
    this.routes()
  }

  config(): void {
    this.app.use(bodyParser.urlencoded({ extended: true }))
    this.app.use(bodyParser.json())
  }

  routes(): void {
    this.app.use(staticAssetRoute)
  }

  public start(port: number): void {
    this.app.listen(port)
  }
}

export default Server
