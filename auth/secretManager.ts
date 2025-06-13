import fs from 'fs'
import { execSync } from 'child_process'

export function loadSecret(key: string): string {
  if (process.env[key]) return process.env[key]
  try {
    // SOPS fallback
    const out = execSync(\`sops -d --extract "['\${key}']" secrets.yaml\`).toString().trim()
    return out
  } catch {
    throw new Error(\`❌ Secret "\${key}" not found\`)
  }
}
