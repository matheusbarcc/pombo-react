import { api } from '@/lib/axios'

import { Publication } from './get-publications'

export async function getPublicationById(publicationId: string) {
  const response = await api.get<Publication>(`/publication/${publicationId}`)

  return response.data
}
