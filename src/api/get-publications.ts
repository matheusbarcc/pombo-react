import { api } from '@/lib/axios'

export interface GetPublicationsBody {
  page: number
  limit: number
  userId?: string
  publicationId?: string
  isLiked?: boolean
  createdAtStart?: string
  createdAtFinal?: string
}

export interface Publication {
  publicationId: string
  publicationContent: string
  publicationAttachmentUrl: string | null
  userId: string
  userName: string
  userEmail: string
  userProfilePictureUrl: string | null
  likeAmount: number
  complaintAmount: number
  createdAt: string
}

export async function getPublications({
  page,
  limit,
  userId,
  publicationId,
  isLiked,
  createdAtStart,
  createdAtFinal,
}: GetPublicationsBody) {
  const response = await api.post<Publication[]>('/publication/filter', {
    page,
    limit,
    userId,
    publicationId,
    isLiked,
    createdAtStart,
    createdAtFinal,
  })

  return response.data
}
