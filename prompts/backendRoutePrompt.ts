export const backendRoutePrompt = (manifest: any[]) => \`
You're a senior backend engineer. Generate RESTful or WebSocket-compatible routes based on this manifest.

Manifest:
\${JSON.stringify(manifest, null, 2)}

Instructions:
- Use TypeScript and Express or Socket.IO
- For "realtime: true", create Socket.IO handlers
- Include type definitions, error handling, and async wrappers
- Write clean, modular code with comments

Output only the complete code file, no explanations.
\`
