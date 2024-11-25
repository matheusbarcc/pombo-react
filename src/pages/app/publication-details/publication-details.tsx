import { useQuery } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'

import { getPublicationById } from '@/api/get-publication-by-id'

import { PublicationCard } from '../feed/publication-card'

export function PublicationDetails() {
  const { publicationId } = useParams()

  if (!publicationId) {
    throw new Error()
  }

  const { data: publication } = useQuery({
    queryKey: ['publication'],
    queryFn: () => getPublicationById(publicationId),
  })

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
        {/* {likes.map((user) => {
          return (
            <Card
              key={user.userId}
              className="items-center border-0 border-t pt-5 px-2 rounded-none flex flex-row justify-between shadow-none bg-transparent"
            >
              <div className="flex gap-3">
                <Avatar src={user.profilePicture} size="small" />
                <div>
                  <CardTitle className="text-md">Mike Ehrmantraut</CardTitle>
                  <CardDescription className="text-xs">
                    waltuh@example.com
                  </CardDescription>
                </div>
              </div>
              <Heart fill="#1CA0F2" className="text-primary" />
            </Card>
          )
        })} */}
      </div>
    </>
  )
}
