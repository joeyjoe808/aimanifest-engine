const orgUsage: Record<string, number> = {}

const limits = {
  default: 10000,
  pro: 100000,
  enterprise: 1000000
}

export function trackOrgUsage(orgId: string, tokens: number) {
  orgUsage[orgId] = (orgUsage[orgId] || 0) + tokens
}

export function isOrgWithinLimit(orgId: string, tier: keyof typeof limits) {
  return (orgUsage[orgId] || 0) <= limits[tier]
}
