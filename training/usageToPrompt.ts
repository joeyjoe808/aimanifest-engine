import fs from 'fs-extra'

export async function extractPatternsForAgent(agent: string) {
  const logs = await fs.readJson('./memory/' + agent + '.log.json').catch(() => [])
  const prompts = logs.map(entry => entry.message).filter(Boolean).slice(-10)

  return \`You're retraining \${agent}. Based on these samples, refine your tone and responses:

\${prompts.map((p, i) => \`### Example \${i + 1}:\n\${p}\`).join('\n\n')}
\`
}
