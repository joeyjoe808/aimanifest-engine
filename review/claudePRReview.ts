import { callClaude } from '../llm/anthropicClient'

export async function runPRReview(diff: string): Promise<string> {
  const prompt = \`
You're a senior engineer reviewing a pull request. Analyze the following code diff and provide:

- Summary of changes
- Potential bugs or risks
- Suggestions for improvement

\`\`\`diff
\${diff}
\`\`\`

Respond as a structured code review.
\`

  return await callClaude(prompt)
}
