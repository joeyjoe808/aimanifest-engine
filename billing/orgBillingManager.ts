import fs from 'fs-extra'

const BILLING_FILE = './billing/org-usage.json'

export async function trackBilling(orgId: string, amount: number) {
  const usage = await fs.readJson(BILLING_FILE).catch(() => ({}))
  usage[orgId] = (usage[orgId] || 0) + amount
  await fs.writeJson(BILLING_FILE, usage, { spaces: 2 })
}

export async function getOrgBalance(orgId: string) {
  const usage = await fs.readJson(BILLING_FILE).catch(() => ({}))
  return usage[orgId] || 0
}
