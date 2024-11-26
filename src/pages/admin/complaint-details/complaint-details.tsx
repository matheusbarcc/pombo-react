import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'

import { getComplaints } from '@/api/get-complaints'
import { getPublicationById } from '@/api/get-publication-by-id'
import { Pagination } from '@/components/pagination'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { useComplaintFilters } from '@/pages/_layouts/admin'

import { ComplaintTableRow } from './complaint-table-row'
import { ReportedPublicationCard } from './reported-publication-card'

export function ComplaintDetails() {
  const { publicationId } = useParams()
  const { complaintFilters } = useComplaintFilters()

  if (!publicationId) {
    throw new Error('Publication ID is required.')
  }

  const { data: publication } = useQuery({
    queryKey: ['publication'],
    queryFn: () => getPublicationById(publicationId),
  })

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['complaints', complaintFilters],
      queryFn: ({ pageParam = 1 }) =>
        getComplaints({
          page: pageParam,
          limit: 5,
          publicationId,
          reason: complaintFilters.reason || undefined,
          status: complaintFilters.status || 'PENDING',
          createdAtStart: complaintFilters.createdAtStart || undefined,
          createdAtEnd: complaintFilters.createdAtEnd || undefined,
        }),
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages) =>
        lastPage.length === 1 ? allPages.length + 1 : undefined,
    })

  const currentPageComplaints = data?.pages[data.pages.length - 1] || []

  return (
    <>
      <Helmet title="Denuncias" />
      <div className="flex flex-col h-screen p-7 gap-5">
        {publication ? (
          <ReportedPublicationCard publication={publication} />
        ) : (
          <p>Loading publication...</p>
        )}
        <div className="flex justify-between">
          <h1 className="text-xl font-bold text-foreground">
            Denuncias pendentes
          </h1>
          <div className="flex gap-8">{/* <ComplaintCaptions /> */}</div>
        </div>
        <Pagination pageIndex={0} totalCount={105} perPage={1} />
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Denunciante</TableHead>
                <TableHead className="w-[200px]">Motivo</TableHead>
                <TableHead>Data</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentPageComplaints.map((complaint) => (
                <ComplaintTableRow
                  key={complaint.complaintId}
                  complaint={complaint}
                />
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  )
}
