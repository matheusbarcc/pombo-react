import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Heart, Megaphone } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import { Publication } from '@/api/get-publications'
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

export interface PublicationCardProps {
  publication: Publication
}

export function PublicationCard({ publication }: PublicationCardProps) {
  const navigate = useNavigate()

  if (publication.userProfilePictureUrl === null) {
    publication.userProfilePictureUrl =
      'https://conteudo.imguol.com.br/c/esporte/10/2022/09/23/richarlison-comemora-gol-pela-selecao-brasileira-em-amistoso-contra-gana-1663969438957_v2_4x3.jpg'
  }

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row justify-between">
        <div className="flex flex-row gap-4">
          <Avatar src={publication.userProfilePictureUrl} size="small" />
          <div>
            <CardTitle
              className="text-md hover:cursor-pointer"
              onClick={() => navigate('/profile')}
            >
              {publication.userName}
            </CardTitle>
            <CardDescription className="text-xs text-muted-foreground">
              {publication.userEmail}
            </CardDescription>
          </div>
        </div>
        <span className="text-xs text-muted-foreground">
          {formatDistanceToNow(publication.createdAt, {
            locale: ptBR,
            addSuffix: true,
          })}
        </span>
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
        <Button
          variant="ghost"
          className="h-2 hover:bg-transparent flex items-center gap-2 px-0"
        >
          <Heart className="h-5 w-5 text-primary" />
          <span className="text-muted-foreground text-sm">
            {publication.likeAmount}
          </span>
        </Button>
        <Button
          variant="ghost"
          className="h-2 hover:bg-transparent flex items-center gap-2 px-0"
        >
          <Megaphone className="h-5 w-5 text-muted-foreground" />
          <span className="text-muted-foreground text-sm">
            {publication.complaintAmount}
          </span>
        </Button>
      </CardFooter>
    </Card>
  )
}
