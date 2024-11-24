import { api } from '@/lib/axios'

export interface CreatePublicationBody {
  // eslint-disable-next-line @typescript-eslint/ban-types
  user: {}
  content: string
}

export async function createPublication({
  user,
  content,
}: CreatePublicationBody) {
  await api.post('/publication', {
    user,
    content,
  })
}
