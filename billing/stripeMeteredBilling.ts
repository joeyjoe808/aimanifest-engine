import Stripe from 'stripe'
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', { apiVersion: '2022-11-15' })

export async function reportUsage(subscriptionItemId: string, quantity: number) {
  return await stripe.usageRecords.create(subscriptionItemId, {
    quantity,
    timestamp: Math.floor(Date.now() / 1000),
    action: 'increment'
  })
}
