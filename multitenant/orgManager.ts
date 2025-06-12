import fs from 'fs-extra'

export async function getOrg(userId: string): Promise<string> {
  const map = await fs.readJson('./multitenant/user-org-map.json').catch(() => ({}))
  return map[userId] || 'default'
}

export async function setOrg(userId: string, orgId: string) {
  const map = await fs.readJson('./multitenant/user-org-map.json').catch(() => ({}))
  map[userId] = orgId
  await fs.writeJson('./multitenant/user-org-map.json', map, { spaces: 2 })
}
