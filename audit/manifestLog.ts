import fs from 'fs-extra'
import path from 'path'
const logPath = path.resolve('./audit/manifest-history.json')

export async function logManifestVersion(manifest: any) {
  const timestamp = new Date().toISOString()
  const entry = { timestamp, manifest }

  const existing = await fs.readJson(logPath).catch(() => [])
  existing.push(entry)
  await fs.writeJson(logPath, existing, { spaces: 2 })
}

export async function getManifestVersions() {
  return await fs.readJson(logPath).catch(() => [])
}
