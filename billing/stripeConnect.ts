import Stripe from 'stripe'
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', { apiVersion: '2022-11-15' })

export async function createConnectedAccount(email: string) {
  const account = await stripe.accounts.create({
    type: 'express',
    email,
    capabilities: {
      transfers: { requested: true },
    },
  })
  return account
}

export async function createAccountLink(accountId: string, refreshUrl: string, returnUrl: string) {
  return await stripe.accountLinks.create({
    account: accountId,
    refresh_url: refreshUrl,
    return_url: returnUrl,
    type: 'account_onboarding',
  })
}

export async function payoutToAgent(accountId: string, amount: number) {
  return await stripe.transfers.create({
    amount,
    currency: 'usd',
    destination: accountId,
  })
}
