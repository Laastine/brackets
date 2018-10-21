import * as express from 'express'

const apiRouter = express.Router()

const matches = [
  ['Yoshi', 'Mario'],
  ['Toad', 'Luigi'],
  ['Koopa Troopa', 'Princess'],
  ['Luigi', 'Bowser']
]

apiRouter.get('/matches', (req: express.Request, res: express.Response) => {
  res.send({matches})
})

export default apiRouter
