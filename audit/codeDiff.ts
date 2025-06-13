import { diffLines } from 'diff'

export function getCodeDiff(oldCode: string, newCode: string): string {
  const diffs = diffLines(oldCode, newCode)
  return diffs.map(part =>
    part.added ? `+ ${part.value}` :
    part.removed ? `- ${part.value}` :
    `  ${part.value}`
  ).join('')
}
