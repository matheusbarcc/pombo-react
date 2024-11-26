import { useQuery } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'

import { getReportedPublications } from '@/api/get-reported-publications'

import { ReportedPublicationCard } from './reported-publication-card'

export function ReportedPublications() {
  const { data: reportedPublications } = useQuery({
    queryKey: ['reported-publications'],
    queryFn: () =>
      getReportedPublications({
        page: 1,
        limit: 10,
      }),
  })

  const reportedPublicationsOnlyPending = reportedPublications?.filter(
    (publication) => publication.pendingComplaintAmount > 0,
  )

  return (
    <>
      <Helmet title="Admin" />
      <div className="flex flex-col h-screen p-7 gap-8">
        <h1 className="text-2xl font-bold text-foreground">
          Publicações Denunciadas
        </h1>
        <div className="flex flex-col gap-5">
          {reportedPublicationsOnlyPending?.map((reportedPublication) => {
            return (
              <ReportedPublicationCard
                key={reportedPublication.publicationId}
                reportedPublication={reportedPublication}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}
