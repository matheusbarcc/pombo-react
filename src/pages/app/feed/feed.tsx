import { useInfiniteQuery } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'

import { getPublications } from '@/api/get-publications'
import { Button } from '@/components/ui/button'
import { useFilters } from '@/pages/_layouts/app'

import { PublicationCard } from './publication-card'

export function Feed() {
  const { filters } = useFilters()

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['publications', filters],
      queryFn: ({ pageParam = 1 }) =>
        getPublications({
          page: pageParam,
          limit: 1,
          content: filters.content || undefined,
          createdAtStart: filters.createdAtStart || undefined,
          createdAtEnd: filters.createdAtEnd || undefined,
          isLiked: filters.isLiked || undefined,
        }),
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages) =>
        lastPage.length === 1 ? allPages.length + 1 : undefined,
    })

  const publications = data?.pages.flat() || []

  return (
    <>
      <Helmet title="Feed" />
      <div className="flex flex-col h-screen p-7 gap-5 items-center">
        {publications.map((publication) => (
          <PublicationCard
            key={publication.publicationId}
            publication={publication}
          />
        ))}
        {hasNextPage && (
          <Button
            className="w-1/4"
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
          >
            {isFetchingNextPage ? 'Carregando...' : 'Mais pruus!'}
          </Button>
        )}
      </div>
    </>
  )
}
