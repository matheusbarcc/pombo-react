import { useQuery } from '@tanstack/react-query'
import { Heart, HeartOff } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'

import { User } from '@/api/get-authenticated-user'
import { getPublicationById } from '@/api/get-publication-by-id'
import { getPublicationLikes } from '@/api/get-publication-likes'
import { Avatar } from '@/components/avatar'
import { Card, CardDescription, CardTitle } from '@/components/ui/card'

import { PublicationCard } from '../feed/publication-card'

export function PublicationDetails() {
  const { publicationId } = useParams()

  if (!publicationId) {
    throw new Error('Publication ID is required.')
  }

  const { data: publication } = useQuery({
    queryKey: ['publication'],
    queryFn: () => getPublicationById(publicationId),
  })

  const { data: likes = [], isError: isLikesError } = useQuery({
    queryKey: ['likes', publicationId],
    queryFn: () => getPublicationLikes(publicationId),
  })

  if (isLikesError) {
    return <p>Error fetching likes. Please try again later.</p>
  }

  return (
    <>
      <Helmet title="Pruu" />
      <div className="flex flex-col h-screen p-7 gap-5">
        {publication ? (
          <PublicationCard publication={publication} />
        ) : (
          <p>Loading publication...</p>
        )}
        <h1 className="text-xl font-bold text-foreground">Curtidas</h1>
        {likes.length > 0 ? (
          likes.map((user: User) => (
            <Card
              key={user.userId}
              className="items-center border-0 border-t pt-5 px-2 rounded-none flex flex-row justify-between shadow-none bg-transparent"
            >
              <div className="flex gap-3">
                {user.profilePicture ? (
                  <Avatar src={user.profilePicture} size="small" />
                ) : null}
                <div>
                  <CardTitle className="text-md">{user.name}</CardTitle>
                  <CardDescription className="text-xs">
                    {user.email}
                  </CardDescription>
                </div>
              </div>
              <Heart fill="#1CA0F2" className="text-primary" />
            </Card>
          ))
        ) : (
          <div className="flex justify-center items-center mt-10 gap-3 text-muted-foreground font-semibold">
            <HeartOff />
            Este pruu ainda não foi curtido.
          </div>
        )}
      </div>
    </>
  )
}
