const tokenUsage: Record<string, number> = {}

const tierLimits = {
  free: 5000,
  pro: 50000,
  enterprise: 1000000
}

export function trackUsage(userId: string, tokens: number) {
  tokenUsage[userId] = (tokenUsage[userId] || 0) + tokens
}

export function isWithinLimit(userId: string, tier: keyof typeof tierLimits): boolean {
  return (tokenUsage[userId] || 0) <= tierLimits[tier]
}

export function getUsage(userId: string) {
  return tokenUsage[userId] || 0
}
