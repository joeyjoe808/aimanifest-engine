import express from 'express'
const router = express.Router()

router.get('/partner-summary', async (req, res) => {
  const accountId = req.query.account || 'acct_12345'
  res.json({
    accountId,
    earnings: 4200.50 // Placeholder, replace with Stripe API call
  })
})

export default router
