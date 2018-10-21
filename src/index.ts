import Server from './server'

const PORT = 4000

const server = new Server()
server.start(PORT)

// tslint:disable: no-console
console.log(`Server listening on port ${PORT}`)
