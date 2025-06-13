import fs from 'fs'
import path from 'path'

export function generateSDK() {
  const sdk = \`
export async function getManifest() {
  return fetch('http://localhost:4002/api/manifest').then(res => res.json())
}

export async function generateDocs(manifest) {
  return fetch('http://localhost:4002/api/docs', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(manifest)
  }).then(res => res.text())
}

export async function checkStatus() {
  return fetch('http://localhost:4002/api/status').then(res => res.json())
}
\`
  fs.writeFileSync(path.resolve('./api/sdk.js'), sdk)
  console.log('✅ SDK generated at ./api/sdk.js')
}
