import { api } from '@/lib/axios'

export interface GetAuthenticatedUserResponse {
  name: string
  email: string
  profilePicture: string | null
}

export async function getAuthenticatedUser() {
  const response = await api.get<GetAuthenticatedUserResponse>(
    '/user/authenticated',
  )

  return response.data
}
