import express from 'express'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', { apiVersion: '2022-11-15' })
const app = express()
app.use(express.json({ type: 'application/json' }))

app.post('/webhook', express.raw({ type: 'application/json' }), (req, res) => {
  const sig = req.headers['stripe-signature']
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET || ''
  let event

  try {
    event = stripe.webhooks.constructEvent(req.body, sig!, endpointSecret)
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${(err as any).message}`)
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object
    console.log('💰 Payment completed for:', session.customer_email)
    // Provision access or memory tier here
  }

  res.json({ received: true })
})

app.listen(4242, () => console.log('🔔 Stripe webhook listening on port 4242'))
