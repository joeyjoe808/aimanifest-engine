import fs from 'fs-extra'
import path from 'path'

const base = './memory'

export async function saveThread(agent: string, message: string) {
  const file = path.join(base, \`\${agent}.log.json\`)
  const history = await fs.readJson(file).catch(() => [])
  history.push({ timestamp: Date.now(), message })
  await fs.writeJson(file, history, { spaces: 2 })
}

export async function getThread(agent: string) {
  const file = path.join(base, \`\${agent}.log.json\`)
  return await fs.readJson(file).catch(() => [])
}
