import { api } from '@/lib/axios'

export interface GetComplaintsBody {
  page: number
  limit: number
  publicationId: string
  userId?: string
  reason?:
    | 'SCAM'
    | 'HATE_SPEECH'
    | 'BULLYING_OR_HARASSMENT'
    | 'SCAM'
    | 'FALSE_INFORMATION'
  status: 'PENDING' | 'ACCEPTED' | 'REJECTED'
  createdAtStart?: string
  createdAtEnd?: string
}

export interface Complaint {
  complaintId: string
  userId: string
  userName: string
  userEmail: string
  userProfilePictureUrl: string | null
  reason:
    | 'SCAM'
    | 'HATE_SPEECH'
    | 'BULLYING_OR_HARASSMENT'
    | 'SCAM'
    | 'FALSE_INFORMATION'
  status: 'PENDING' | 'ACCEPTED' | 'REJECTED'
  createdAt: string
}

export async function getComplaints({
  page,
  limit,
  publicationId,
  userId,
  reason,
  status,
  createdAtStart,
  createdAtEnd,
}: GetComplaintsBody) {
  const response = await api.post<Complaint[]>('/complaint/admin/filter', {
    page,
    limit,
    publicationId,
    userId,
    reason,
    status,
    createdAtStart,
    createdAtEnd,
  })

  return response.data
}
