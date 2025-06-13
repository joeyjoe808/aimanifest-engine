import { AgentProfiles } from '../agents/personas'
import { routeAIRequest } from '../router/aiSwitchboard'
import { getThread, saveThread } from '../memory/threadStore'
import fs from 'fs'

export async function runAgentWorkflow(workflow: string[]) {
  for (const agent of workflow) {
    const persona = AgentProfiles[agent]
    const history = await getThread(agent)

    const context = history.map(h => h.message).join('\n')
    const prompt = \`
You are \${persona.role}.
Your goals are: \${persona.goals.join(', ')}.
Previous context:
\${context}

Respond in your \${persona.personality} voice.
\`

    const output = await routeAIRequest('codegen', prompt)
    await saveThread(agent, output)
    console.log(\`[\${agent}] ✅ Task complete\n\`, output)
  }
}
