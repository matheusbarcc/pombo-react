import { Check, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { TableCell, TableRow } from '@/components/ui/table'

export function ComplaintTableRow() {
  return (
    <TableRow>
      <TableCell>
        <div>Jesse Pinkman</div>
      </TableCell>
      <TableCell>DISCURSO DE ODIO</TableCell>
      <TableCell>22/11/2024</TableCell>
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
