import fs from 'fs-extra'
import path from 'path'

export async function saveUserMessage(userId: string, message: string) {
  const file = path.join('./memory', \`\${userId}.log.json\`)
  const history = await fs.readJson(file).catch(() => [])
  history.push({ timestamp: Date.now(), message })
  await fs.writeJson(file, history, { spaces: 2 })
}

export async function getUserHistory(userId: string) {
  const file = path.join('./memory', \`\${userId}.log.json\`)
  return await fs.readJson(file).catch(() => [])
}
