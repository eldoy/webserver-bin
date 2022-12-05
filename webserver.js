const http = require('http')
const smor = require('smor')

const PORT = 8080

const server = http.createServer((req, res) => {
  smor(req, res, {
    dir: 'dist'
  })
})

console.log(`\nStarted web server.\n\nGo to http://localhost:${PORT}`)
server.listen(PORT)
