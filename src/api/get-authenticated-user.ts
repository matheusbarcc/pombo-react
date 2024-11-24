import { api } from '@/lib/axios'

export interface GetAuthenticatedUserResponse {
  userId: string
  name: string
  email: string
  profilePicture: string | null
  createdAt: string
}

export async function getAuthenticatedUser() {
  const response = await api.get<GetAuthenticatedUserResponse>(
    '/user/authenticated',
  )

  return response.data
}
