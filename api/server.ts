import express from 'express'
import cors from 'cors'
import apiRoutes from './routes'

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', apiRoutes)

app.listen(4002, () => {
  console.log('🌐 Developer API server running at http://localhost:4002/api')
})
