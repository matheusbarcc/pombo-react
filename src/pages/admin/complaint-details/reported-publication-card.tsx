import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { Avatar } from '@/components/avatar'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { PublicationCardProps } from '@/pages/app/feed/publication-card'

export function ReportedPublicationCard({ publication }: PublicationCardProps) {
  return (
    <>
      <Card className="w-full">
        <CardHeader className="flex flex-row justify-between">
          <div className="flex flex-row items-center gap-4">
            <Avatar src={publication.userProfilePictureUrl} />
            <div>
              <CardTitle className="text-md">{publication.userName}</CardTitle>
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
        <CardContent className="flex flex-col gap-3">
          <div>{publication.publicationContent}</div>
          {publication.publicationAttachmentUrl && (
            <img
              src={publication.publicationAttachmentUrl}
              alt=""
              className="rounded-md"
            />
          )}
        </CardContent>
      </Card>
    </>
  )
}
