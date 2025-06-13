import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic({
  apiKey: process.env.CLAUDE_API_KEY,
})

export async function callClaudeStream(prompt: string, onStream: (chunk: string) => void): Promise<void> {
  const stream = await client.messages.stream({
    model: "claude-3-sonnet-20240229",
    max_tokens: 2048,
    temperature: 0.2,
    messages: [
      { role: "user", content: prompt }
    ]
  })

  for await (const message of stream) {
    if (message.type === "content_block") {
      onStream(message.text)
    }
  }
}
