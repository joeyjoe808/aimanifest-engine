export type Role = 'builder' | 'reviewer' | 'deployer'

export interface User {
  id: string
  name: string
  role: Role
}

export function hasPermission(user: User, action: 'build' | 'review' | 'deploy') {
  const permissions = {
    builder: ['build'],
    reviewer: ['build', 'review'],
    deployer: ['build', 'review', 'deploy']
  }
  return permissions[user.role].includes(action)
}
