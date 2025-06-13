import { createClient } from 'redis'

const client = createClient({ url: 'redis://localhost:6379' })
client.connect()

export async function cacheDiff(key: string, value: string) {
  await client.set(key, value, { EX: 3600 }) // 1 hour TTL
}

export async function getCachedDiff(key: string) {
  return await client.get(key)
}
