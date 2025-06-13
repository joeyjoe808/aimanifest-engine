import { callClaude } from '../llm/anthropicClient'

export async function generateDocumentation(manifest: any) {
  const prompt = \`
You're a technical writer. Based on the following button manifest, generate clear, user-facing documentation that explains:

- What each button does
- When to use it
- Expected outcome

Manifest:
\${JSON.stringify(manifest, null, 2)}
\`

  return await callClaude(prompt)
}
