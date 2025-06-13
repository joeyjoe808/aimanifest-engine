import { Queue } from 'bullmq'
import { createClient } from 'redis'

const connection = createClient({ url: 'redis://localhost:6379' })
connection.connect()

export const jobQueue = new Queue('ai-tasks', { connection })

export async function enqueueJob(type: string, data: any) {
  const job = await jobQueue.add(type, data)
  console.log('🧾 Job queued:', job.id)
  return job.id
}
