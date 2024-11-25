import { api } from '@/lib/axios'

export async function likePublication(publicationId: string) {
  const response = await api.post<boolean>(`/publication/like/${publicationId}`)

  return response.data
}
