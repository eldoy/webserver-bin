const path = require('path')
const http = require('http')
const smor = require('smor')

const PORT = 8080

const dir = path.join(process.argv[0], '..', 'dist')

const server = http.createServer((req, res) => {
  smor(req, res, { dir })
})

console.log(`\nServing files from ${dir}`)
console.log(`\nGo to http://localhost:${PORT}`)
console.log(`\nCreated by Eldøy Projects`)

server.listen(PORT)
