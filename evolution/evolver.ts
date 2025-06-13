import { callClaude } from '../llm/anthropicClient'
import fs from 'fs-extra'

export async function evolveAgent(agentName: string, logPath: string) {
  const logs = await fs.readFile(logPath, 'utf-8')
  const prompt = \`
You're an AI agent refactorer. Analyze the following logs and evolve the agent's behavior to improve accuracy, speed, and reliability.

Agent: \${agentName}
Logs:
\${logs}

Return an updated agent persona or prompt logic.
\`

  return await callClaude(prompt)
}
