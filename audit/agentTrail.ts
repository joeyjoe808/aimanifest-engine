import fs from 'fs-extra'

export async function logAgentAction(agent: string, action: string, input: string, output: string) {
  const log = {
    timestamp: new Date().toISOString(),
    agent,
    action,
    input,
    output
  }

  const logs = await fs.readJson('./audit/agent-trail.json').catch(() => [])
  logs.push(log)
  await fs.writeJson('./audit/agent-trail.json', logs, { spaces: 2 })
}

export async function getAgentTrail() {
  return await fs.readJson('./audit/agent-trail.json').catch(() => [])
}
