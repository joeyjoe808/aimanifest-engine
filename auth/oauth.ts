import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'super-secure'

export function issueToken(userId: string, orgId: string) {
  return jwt.sign({ userId, orgId }, JWT_SECRET, { expiresIn: '4h' })
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, JWT_SECRET)
  } catch {
    return null
  }
}
