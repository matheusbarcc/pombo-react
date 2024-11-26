import { useMutation } from '@tanstack/react-query'
import { format } from 'date-fns'
import { Check, X } from 'lucide-react'
import { toast } from 'sonner'

import { Complaint } from '@/api/get-complaints'
import { updateComplaintStatus } from '@/api/update-complaint-status'
import { Button } from '@/components/ui/button'
import { TableCell, TableRow } from '@/components/ui/table'

export interface ComplaintTableRowProps {
  complaint: Complaint
}

export function ComplaintTableRow({ complaint }: ComplaintTableRowProps) {
  const { mutateAsync: updateStatus } = useMutation({
    mutationFn: updateComplaintStatus,
  })

  // Mapping for complaint reasons
  const complaintReasonMapping: Record<string, string> = {
    SCAM: 'Golpe',
    HATE_SPEECH: 'Discurso de ódio',
    BULLYING_OR_HARASSMENT: 'Bullying ou assédio',
    FALSE_INFORMATION: 'Informação falsa',
  }

  async function handleUpdateStatus(complaintId: string, newStatus: string) {
    try {
      await updateStatus({ complaintId, newStatus })
      window.location.reload()
    } catch {
      toast.error('Erro ao atualizar status.')
    }
  }

  return (
    <TableRow>
      <TableCell>{complaint.userName}</TableCell>
      <TableCell>
        {complaintReasonMapping[complaint.reason] || complaint.reason}
      </TableCell>
      <TableCell>{format(complaint.createdAt, 'dd/MM/yyyy')}</TableCell>
      <TableCell className="flex flex-row gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleUpdateStatus(complaint.complaintId, 'accepted')}
        >
          <Check />
          Aprovar
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleUpdateStatus(complaint.complaintId, 'rejected')}
        >
          <X />
          Rejeitar
        </Button>
      </TableCell>
    </TableRow>
  )
}
