import { api } from '@/lib/axios'

export async function deletePublication(publicationId: string) {
  await api.delete(`/publication/${publicationId}`)
}
