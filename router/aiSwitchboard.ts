import { callClaude } from '../llm/anthropicClient'
import { callClaudeWithTools } from '../llm/claudeToolUseClient'
import { callGPT4o } from '../llm/openaiClient'
import { callMistral } from '../llm/mistralClient'

export async function routeAIRequest(type: 'codegen' | 'review' | 'vision', prompt: string) {
  try {
    if (type === 'vision') return await callGPT4o(prompt)
    if (type === 'review') return await callClaudeWithTools(prompt)
    return await callClaude(prompt)
  } catch (err) {
    console.warn('⚠️ Falling back to Mistral')
    return await callMistral(prompt)
  }
}
