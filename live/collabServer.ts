import { createServer } from 'http'
import { Server } from 'socket.io'

const server = createServer()
const io = new Server(server, {
  cors: { origin: '*' }
})

io.on('connection', (socket) => {
  console.log('🧑‍💻 Collaborator connected')

  socket.on('chat', msg => {
    io.emit('chat', msg)
  })

  socket.on('codeUpdate', data => {
    io.emit('codeSync', data)
  })
})

server.listen(5000, () => {
  console.log('🔁 Live Collab Server on ws://localhost:5000')
})
