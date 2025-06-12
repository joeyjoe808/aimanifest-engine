import fs from 'fs'
import path from 'path'

export function generateChangelog() {
  const logPath = path.resolve('./audit/manifest-history.json')
  const logs = JSON.parse(fs.readFileSync(logPath, 'utf-8'))

  return logs.map((entry: any, idx: number) => {
    return \`## Version \${idx + 1} - \${new Date(entry.timestamp).toLocaleString()}
- Changes:
  - Manifest updated
  - Triggered code regeneration\`
  }).join('\n\n')
}
