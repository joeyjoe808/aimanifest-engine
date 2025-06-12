import fs from 'fs-extra'

const TICKET_LOG = './support/tickets.json'

export async function createTicket(userId: string, subject: string, description: string) {
  const ticket = {
    id: Date.now().toString(),
    userId,
    subject,
    description,
    status: 'open',
    createdAt: new Date().toISOString()
  }

  const tickets = await fs.readJson(TICKET_LOG).catch(() => [])
  tickets.push(ticket)
  await fs.writeJson(TICKET_LOG, tickets, { spaces: 2 })

  return ticket
}

export async function getAllTickets() {
  return await fs.readJson(TICKET_LOG).catch(() => [])
}
