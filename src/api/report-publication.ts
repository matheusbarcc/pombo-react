import { api } from '@/lib/axios'

export interface ReportPublicationBody {
  // eslint-disable-next-line @typescript-eslint/ban-types
  user: {}
  publication: {
    id: string
  }
  reason:
    | 'SCAM'
    | 'HATE_SPEECH'
    | 'BULLYING_OR_HARASSMENT'
    | 'SCAM'
    | 'FALSE_INFORMATION'
}

export async function reportPublication({
  user,
  publication,
  reason,
}: ReportPublicationBody) {
  await api.post('/complaint', {
    user,
    publication,
    reason,
  })
}
