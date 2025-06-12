import { backendRoutePrompt } from './prompts/backendRoutePrompt'
import { smartButtonPrompt } from './prompts/smartButtonPrompt'
import { callClaude } from './llm/callClaude'
import fs from 'fs/promises'

export async function runManifestCycle(manifest: any[]) {
  const [backendCode, frontendCode] = await Promise.all([
    callClaude(backendRoutePrompt(manifest)),
    callClaude(smartButtonPrompt(manifest))
  ])

  await fs.writeFile('./outputs/routes.ts', backendCode)
  await fs.writeFile('./outputs/SmartButton.tsx', frontendCode)

  console.log("✅ Code files generated.")
}
