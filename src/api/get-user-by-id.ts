import { api } from '@/lib/axios'

import { User } from './get-authenticated-user'

export async function getUserById(userId: string) {
  const response = await api.get<User>(`/user/${userId}`)

  return response.data
}
