import * as bodyParser from 'body-parser'
import * as express from 'express'
import staticAssetRouter from './routes/staticAssetRouter'

class Server {
  public appServer: express.Application

  constructor() {
    this.appServer = express()
    this.config()
    this.routes()
  }

  public config(): void {
    this.appServer.use(bodyParser.urlencoded({extended: true}))
    this.appServer.use(bodyParser.json())
  }

  public routes(): void {
    this.appServer.use(staticAssetRouter)
  }

  public start(port: number): void {
    this.appServer.listen(port)
  }
}

export default Server
