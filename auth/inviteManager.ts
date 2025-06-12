import fs from 'fs-extra'
const file = './auth/invites.json'

export async function isInviteValid(email: string) {
  const invites = await fs.readJson(file).catch(() => [])
  return invites.includes(email)
}

export async function addInvite(email: string) {
  const invites = await fs.readJson(file).catch(() => [])
  if (!invites.includes(email)) {
    invites.push(email)
    await fs.writeJson(file, invites, { spaces: 2 })
  }
}
