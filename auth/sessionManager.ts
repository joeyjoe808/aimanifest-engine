import jwt from 'jsonwebtoken'

const SECRET = process.env.SESSION_SECRET || 'dev-secret'

export function createSession(userId: string) {
  return jwt.sign({ userId }, SECRET, { expiresIn: '2h' })
}

export function verifySession(token: string) {
  try {
    return jwt.verify(token, SECRET)
  } catch {
    return null
  }
}
