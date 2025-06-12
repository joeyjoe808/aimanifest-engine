export async function callMistral(prompt: string): Promise<string> {
  // Placeholder for local Mistral inference call
  console.log('🧠 Mistral fallback used')
  return \`// Mistral response for: \${prompt.slice(0, 50)}...\`
}
