import express from 'express'
import { getManifestVersions } from '../audit/manifestLog'
import { getCodeDiff } from '../audit/codeDiff'
import fs from 'fs-extra'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

app.get('/versions', async (req, res) => {
  const history = await getManifestVersions()
  res.json(history)
})

app.post('/diff', async (req, res) => {
  const { oldCodePath, newCodePath } = req.body
  const oldCode = await fs.readFile(oldCodePath, 'utf-8')
  const newCode = await fs.readFile(newCodePath, 'utf-8')
  res.send(getCodeDiff(oldCode, newCode))
})

app.listen(3000, () => {
  console.log('📊 Dashboard backend running on http://localhost:3000')
})
