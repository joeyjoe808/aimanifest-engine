import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic({ apiKey: process.env.CLAUDE_API_KEY })

export async function callClaudeWithTools(prompt: string) {
  const tool = {
    name: "generateCode",
    description: "Generates code files from manifest",
    input_schema: {
      type: "object",
      properties: {
        manifest: { type: "array" }
      },
      required: ["manifest"]
    }
  }

  const response = await client.beta.tools.messages.create({
    model: "claude-3-opus-20240229",
    messages: [{ role: "user", content: prompt }],
    tools: [tool]
  })

  return response
}
