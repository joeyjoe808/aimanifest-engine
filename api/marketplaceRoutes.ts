import express from 'express'
import { getTopAgents, getFeatured } from '../marketplace/leaderboard'

const router = express.Router()

router.get('/agents', (_, res) => {
  res.json({
    leaderboard: getTopAgents(),
    featured: getFeatured()
  })
})

export default router
