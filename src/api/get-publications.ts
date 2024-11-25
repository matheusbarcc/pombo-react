import { api } from '@/lib/axios'

export interface GetPublicationsBody {
  page: number
  limit: number
  content?: string
  userId?: string
  publicationId?: string
  isLiked?: boolean
  createdAtStart?: string
  createdAtEnd?: string
}

export interface Publication {
  publicationId: string
  publicationContent: string
  publicationAttachmentUrl: string | null
  userId: string
  userName: string
  userEmail: string
  userProfilePictureUrl: string | null
  likesUserIds: string[]
  likeAmount: number
  complaintAmount: number
  createdAt: string
}

export async function getPublications({
  page,
  limit,
  content,
  userId,
  publicationId,
  isLiked,
  createdAtStart,
  createdAtEnd,
}: GetPublicationsBody) {
  const response = await api.post<Publication[]>('/publication/filter', {
    page,
    limit,
    content,
    userId,
    publicationId,
    isLiked,
    createdAtStart,
    createdAtEnd,
  })

  return response.data
}
