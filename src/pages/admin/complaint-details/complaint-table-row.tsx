import { format } from 'date-fns'
import { Check, X } from 'lucide-react'

import { Complaint } from '@/api/get-complaints'
import { Button } from '@/components/ui/button'
import { TableCell, TableRow } from '@/components/ui/table'

export interface ComplaintTableRowProps {
  complaint: Complaint
}

export function ComplaintTableRow({ complaint }: ComplaintTableRowProps) {
  return (
    <TableRow>
      <TableCell>{complaint.userName}</TableCell>
      <TableCell>{complaint.reason}</TableCell>
      <TableCell>{format(complaint.createdAt, 'dd/MM/yyyy')}</TableCell>
      <TableCell className="flex flex-row gap-2">
        <Button variant="outline" size={'sm'}>
          <Check />
          Aprovar
        </Button>
        <Button variant="outline" size={'sm'}>
          <X />
          Rejeitar
        </Button>
      </TableCell>
    </TableRow>
  )
}
