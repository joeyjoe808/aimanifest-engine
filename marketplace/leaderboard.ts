export const agents = [
  { id: 'builderbot', installs: 9001, rating: 4.9 },
  { id: 'uxbot', installs: 8700, rating: 4.8 },
  { id: 'legalbot', installs: 4200, rating: 4.5 },
  { id: 'finbot', installs: 2800, rating: 4.7 }
]

export function getTopAgents() {
  return agents.sort((a, b) => b.installs - a.installs)
}

export function getFeatured() {
  return agents.filter(a => a.rating >= 4.8)
}
