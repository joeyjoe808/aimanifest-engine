import { createServer } from 'http'
import { Server } from 'socket.io'

const httpServer = createServer()
const io = new Server(httpServer, {
  cors: {
    origin: '*',
  },
})

io.on('connection', (socket) => {
  console.log('🟢 WebSocket client connected')

  socket.onAny((event, data) => {
    console.log(`📩 Received: ${event} →`, data)
    socket.emit(`${event}:response`, { echo: data, timestamp: Date.now() })
  })
})

httpServer.listen(4000, () => {
  console.log('✅ WebSocket server running on ws://localhost:4000')
})

