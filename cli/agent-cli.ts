#!/usr/bin/env ts-node

import { runManifestCycle } from '../orchestrator'
import { runPRReview } from '../review/claudePRReview'
import fs from 'fs'
import path from 'path'

const args = process.argv.slice(2)
const command = args[0]

if (command === 'build') {
  const manifestPath = args[1] || './manifest.json'
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'))
  runManifestCycle(manifest)
} else if (command === 'review') {
  const diffFile = args[1]
  if (!diffFile) {
    console.error("❌ Usage: agent-cli review ./diff.txt")
    process.exit(1)
  }
  const diff = fs.readFileSync(diffFile, 'utf-8')
  runPRReview(diff).then(console.log)
} else {
  console.log("Agent CLI
Usage:
  agent-cli build ./manifest.json
  agent-cli review ./diff.txt")
}
