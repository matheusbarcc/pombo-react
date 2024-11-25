import { api } from '@/lib/axios'

import { User } from './get-authenticated-user'

export async function fetchPublicationLikes(publicationId: string) {
  try {
    const response = await api.get<User[]>(
      `/publication/likes/${publicationId}`,
    )
    console.log('Response data:', response.data) // For debugging
    return response.data
  } catch (error) {
    console.error('Error fetching publication likes:', error)
    throw error // Propagate the error to the caller
  }
}
