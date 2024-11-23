import { Helmet } from 'react-helmet-async'

import { ComplaintCaptions } from '@/components/complaint-captions'
import { Pagination } from '@/components/pagination'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { ComplaintTableRow } from './complaint-table-row'
import { ReportedPublicationCard } from './reported-publication-card'

export function ComplaintDetails() {
  return (
    <>
      <Helmet title="Denuncias" />
      <div className="flex flex-col h-screen p-7 gap-5">
        <ReportedPublicationCard />
        <div className="flex justify-between">
          <h1 className="text-xl font-bold text-foreground">
            Denuncias pendentes
          </h1>
          <div className="flex gap-8">
            <ComplaintCaptions />
          </div>
        </div>
        <Pagination pageIndex={0} totalCount={105} perPage={10} />
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Denunciante</TableHead>
                <TableHead className="w-[100px]">Motivo</TableHead>
                <TableHead className="w-[100px]">Data</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 5 }).map((_, i) => {
                return <ComplaintTableRow key={i} />
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  )
}
