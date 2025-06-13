import { callClaude } from '../llm/anthropicClient'

export async function generateSupportReply(ticket: { subject: string; description: string }) {
  const prompt = \`
You're a customer support AI agent. Draft a helpful and professional response to this support ticket:

Subject: \${ticket.subject}
Message: \${ticket.description}

Keep it clear, friendly, and helpful. Offer next steps if needed.
\`

  return await callClaude(prompt)
}
