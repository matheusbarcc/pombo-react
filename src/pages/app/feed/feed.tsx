import { useQuery } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'

import { getPublications } from '@/api/get-publications'
import { useFilters } from '@/pages/_layouts/app'

import { PublicationCard } from './publication-card'

export function Feed() {
  const { filters } = useFilters()

  const { data: publications } = useQuery({
    queryKey: ['publications', filters],
    queryFn: () =>
      getPublications({
        page: 1,
        limit: 10,
        content: filters.content || undefined,
        createdAtStart: filters.createdAtStart || undefined,
        createdAtEnd: filters.createdAtEnd || undefined,
        isLiked: filters.isLiked || undefined,
      }),
    enabled: true,
  })

  return (
    <>
      <Helmet title="Feed" />
      <div className="flex flex-col h-screen p-7 gap-5">
        {publications?.map((publication) => (
          <PublicationCard
            key={publication.publicationId}
            publication={publication}
          />
        ))}
      </div>
    </>
  )
}
