export function buildAgentSkeleton(name: string) {
  return \`
// ${name} Agent

export const ${name} = {
  role: "Describe this agent",
  goals: ["Goal 1", "Goal 2"],
  personality: "Friendly, fast, curious"
}
\`
}
