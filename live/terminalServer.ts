import express from 'express'
import { exec } from 'child_process'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

app.post('/shell', (req, res) => {
  const cmd = req.body.command
  exec(cmd, { timeout: 5000 }, (err, stdout, stderr) => {
    if (err) return res.json({ error: stderr })
    res.json({ output: stdout })
  })
})

app.listen(8080, () => {
  console.log('🖥️ Terminal server running at http://localhost:8080')
})
