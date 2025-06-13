import express from 'express'
import fs from 'fs-extra'
import { generateDocumentation } from '../docs/generateDoc'

const router = express.Router()

router.get('/manifest', async (_, res) => {
  const manifest = await fs.readJson('./docs/sample-manifest.json')
  res.json(manifest)
})

router.post('/docs', async (req, res) => {
  const doc = await generateDocumentation(req.body)
  res.send(doc)
})

router.get('/status', (_, res) => {
  res.json({ ok: true, timestamp: Date.now() })
})

export default router
