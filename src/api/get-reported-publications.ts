import { api } from '@/lib/axios'

export interface GetReportedPublicationsBody {
  page: number
  limit: number
}

export interface ReportedPublication {
  publicationId: string
  publicationContent: string
  userId: string
  userName: string
  userEmail: string
  userProfilePictureUrl: string | null
  complaintAmount: number
  pendingComplaintAmount: number
  acceptedComplaintAmount: number
  rejectedComplaintAmount: number
  createdAt: string
}

export async function getReportedPublications({
  page,
  limit,
}: GetReportedPublicationsBody) {
  const response = await api.post<ReportedPublication[]>(
    '/complaint/admin/fetch-reported-publications',
    {
      page,
      limit,
    },
  )

  return response.data
}
