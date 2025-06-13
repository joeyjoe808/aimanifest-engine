# AI Manifest Engine

This project auto-generates backend routes and real-time SmartButton components from a React button manifest using Claude AI.

## 🔧 Features

- Claude-powered backend route generation (REST or WebSocket)
- SmartButton React components with real-time support
- Prompt chaining via a Master AI Agent
- GitHub Actions CI/CD integration

## 🚀 Setup

```bash
npm install
```

To run the orchestration process with a sample manifest:

```bash
npm run start
```

## 👷 CI/CD

Pushes to `main` trigger GitHub Actions:
- Installs dependencies
- Runs the orchestrator pipeline

## 📁 File Structure

```
prompts/           # Claude prompt templates
orchestrator.ts    # Master agent orchestrator
llm/               # Claude API handler
outputs/           # Generated files
.github/workflows/ # GitHub Actions CI/CD
```

## 📦 Add your manifest

Update `orchestrator.ts` to pass your `buttonManifest` into `runManifestCycle(manifest)`.

---
Built for next-gen AI code generation systems.
// trigger redeploy
// trigger redeploy
