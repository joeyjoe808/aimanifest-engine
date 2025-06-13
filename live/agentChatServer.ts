import { Server } from 'socket.io'
import { createServer } from 'http'

const httpServer = createServer()
const io = new Server(httpServer, {
  cors: { origin: '*' }
})

io.on('connection', (socket) => {
  console.log('👤 Agent joined chat')
  socket.on('message', (msg) => {
    io.emit('message', msg)
  })
})

httpServer.listen(5050, () => {
  console.log('💬 Agent Chat Server running at ws://localhost:5050')
})
