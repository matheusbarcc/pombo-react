import { useQuery } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'

import { getPublications } from '@/api/get-publications'

import { PublicationCard } from './publication-card'

export function Feed() {
  const { data: publications } = useQuery({
    queryKey: ['publications'],
    queryFn: () =>
      getPublications({
        page: 1,
        limit: 10,
      }),
  })

  return (
    <>
      <Helmet title="Feed" />
      <div className="flex flex-col h-screen p-7 gap-5">
        {publications?.map((publication) => {
          return (
            <PublicationCard
              key={publication.publicationId}
              publication={publication}
            />
          )
        })}
      </div>
    </>
  )
}
