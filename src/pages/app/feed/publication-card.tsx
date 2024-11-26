import { useMutation, useQuery } from '@tanstack/react-query'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Heart, Megaphone, Trash2 } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

import { deletePublication } from '@/api/delete-publication'
import { getAuthenticatedUser } from '@/api/get-authenticated-user'
import { Publication } from '@/api/get-publications'
import { likePublication } from '@/api/like-publication'
import { Avatar } from '@/components/avatar'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'

import { ReportPublicationDialog } from './report-publication-dialog'

export interface PublicationCardProps {
  publication: Publication
}

export function PublicationCard({ publication }: PublicationCardProps) {
  const navigate = useNavigate()

  const [likes, setLikes] = useState(publication.likesUserIds || [])

  if (publication.userProfilePictureUrl === null) {
    publication.userProfilePictureUrl =
      'https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg'
  }

  const { data: authenticatedUser } = useQuery({
    queryKey: ['authenticatedUser'],
    queryFn: getAuthenticatedUser,
  })

  const { mutateAsync: like } = useMutation({
    mutationFn: likePublication,
  })

  async function handleLikePublication(publicationId: string) {
    try {
      const response = await like(publicationId)

      if (response) {
        setLikes((state) => {
          const userId = authenticatedUser?.userId
          if (userId) {
            return [...state, userId]
          }
          return state
        })
      } else {
        setLikes((state) => {
          const userId = authenticatedUser?.userId
          if (userId) {
            return state.filter((id) => id !== userId)
          }
          return state
        })
      }
    } catch {
      toast.error('Erro ao curtir pruu.')
    }
  }

  const isLiked = likes.some((userId) => userId === authenticatedUser?.userId)

  const { mutateAsync: deletePub } = useMutation({
    mutationFn: deletePublication,
  })

  async function handleDeletePublication(publicationId: string) {
    try {
      await deletePub(publicationId)
      window.location.reload()
    } catch {
      toast.error('Erro ao curtir pruu.')
    }
  }

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row justify-between">
        <div className="flex flex-row gap-4">
          <Avatar src={publication.userProfilePictureUrl} size="small" />
          <div>
            <CardTitle
              className="text-md hover:cursor-pointer"
              onClick={() => navigate(`/profile/${publication.userId}`)}
            >
              {publication.userName}
            </CardTitle>
            <CardDescription className="text-xs text-muted-foreground">
              {publication.userEmail}
            </CardDescription>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <span className="text-xs text-muted-foreground">
            {formatDistanceToNow(publication.createdAt, {
              locale: ptBR,
              addSuffix: true,
            })}
          </span>
          {publication.userId === authenticatedUser?.userId ? (
            <Button
              variant="ghost"
              className="text-muted-foreground hover:text-rose-500 hover:bg-transparent p-0"
              onClick={() => handleDeletePublication(publication.publicationId)}
            >
              <Trash2 />
            </Button>
          ) : null}
        </div>
      </CardHeader>
      <CardContent
        className="hover:cursor-pointer flex flex-col gap-3"
        onClick={() => navigate(`/details/${publication.publicationId}`)}
      >
        {publication.publicationContent}
        {publication.publicationAttachmentUrl && (
          <img
            src={publication.publicationAttachmentUrl}
            alt=""
            className="rounded-md"
          />
        )}
      </CardContent>
      <CardFooter className="flex gap-6">
        {!isLiked ? (
          <Button
            variant="ghost"
            className="h-2 hover:bg-transparent flex items-center gap-2 px-0"
            onClick={() => handleLikePublication(publication.publicationId)}
          >
            <Heart className="h-5 w-5 text-primary" />
            <span className="text-muted-foreground text-sm">
              {likes.length}
            </span>
          </Button>
        ) : (
          <Button
            variant="ghost"
            className="h-2 hover:bg-transparent flex items-center gap-2 px-0"
            onClick={() => handleLikePublication(publication.publicationId)}
          >
            <Heart fill="#1CA0F2" className="h-5 w-5 text-primary" />
            <span className="text-muted-foreground text-sm font-mono font-semibold">
              {likes.length}
            </span>
          </Button>
        )}
        {publication.userId !== authenticatedUser?.userId ? (
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                className="h-2 hover:bg-transparent flex items-center gap-2 px-0"
              >
                <Megaphone className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground text-sm font-semibold">
                  {publication.complaintAmount}
                </span>
              </Button>
            </DialogTrigger>

            <ReportPublicationDialog
              publicationId={publication.publicationId}
            />
          </Dialog>
        ) : null}
      </CardFooter>
    </Card>
  )
}
