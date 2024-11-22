import { ScrollArea } from '@radix-ui/react-scroll-area'
import { Helmet } from 'react-helmet-async'

import { ComplaintCaptions } from '@/components/complaint-captions'
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
        <ScrollArea className="h-[200px] w-full">
          <Table className="w-full">
            <TableHeader>
              <TableRow>
                <TableHead className="w-full">Denunciante</TableHead>
                <TableHead className="w-[]">Motivo</TableHead>
                <TableHead className="w-[]">Data</TableHead>
                <TableHead className=""></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 8 }).map((_, i) => (
                <ComplaintTableRow key={i} />
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </div>
    </>
  )
}
