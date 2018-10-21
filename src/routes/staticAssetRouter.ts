import * as express from 'express'
import * as path from 'path'

const staticAssetRouter = express.Router()

const bundleJsFilePath = path.resolve(`${__dirname}/../../.generated/bundle.js`)
const bundleStylesFilePath = path.resolve(`${__dirname}/../../.generated/styles.css`)
const indexHtml = path.resolve(`${__dirname}/../../index.html`)
const favicon = path.resolve(`${__dirname}/../../client/img/Br.png`)

const serveStaticResource = (filePath: string) => (req: express.Request, res: express.Response) => {
  res.sendFile(filePath)
}

staticAssetRouter.get('/', serveStaticResource(indexHtml))
staticAssetRouter.get('/bundle.js', serveStaticResource(bundleJsFilePath))
staticAssetRouter.get('/styles.css', serveStaticResource(bundleStylesFilePath))
staticAssetRouter.get('/favicon.ico', serveStaticResource(favicon))

export default staticAssetRouter
