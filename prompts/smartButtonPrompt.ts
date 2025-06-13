export const smartButtonPrompt = (manifest: any[]) => \`
You're a frontend engineer. Generate reusable React SmartButton components for the following manifest.

Manifest:
\${JSON.stringify(manifest, null, 2)}

Instructions:
- Use React + TypeScript + Tailwind CSS
- If "realtime: true", use a WebSocket hook (e.g. useSocket)
- Handle loading, success, error UI states
- Ensure accessibility (aria, keyboard)
- Wrap logic in hooks if necessary

Return only the code. No extra text.
\`
