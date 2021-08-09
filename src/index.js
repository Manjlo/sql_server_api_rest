import app from './app'

let port = app.get('port')

app.listen(port)

console.log('server on port', port)