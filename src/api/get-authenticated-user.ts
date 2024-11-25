import { api } from '@/lib/axios'

export interface User {
  userId: string
  name: string
  email: string
  profilePicture: string | null
  createdAt: string
}

export async function getAuthenticatedUser() {
  const response = await api.get<User>('/user/authenticated')

  return response.data
}
