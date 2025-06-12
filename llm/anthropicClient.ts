import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic({
  apiKey: process.env.CLAUDE_API_KEY,
})

export async function callClaude(prompt: string): Promise<string> {
  const completion = await client.messages.create({
    model: "claude-3-sonnet-20240229",
    max_tokens: 2048,
    temperature: 0.2,
    messages: [
      { role: "user", content: prompt }
    ]
  })

  return completion.content?.[0]?.text || ''
}
