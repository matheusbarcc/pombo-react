import { useMutation } from '@tanstack/react-query'
import { Megaphone } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { reportPublication } from '@/api/report-publication'
import { Button } from '@/components/ui/button'
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

const reportForm = z.object({
  reason: z.enum([
    'SCAM',
    'HATE_SPEECH',
    'BULLYING_OR_HARASSMENT',
    'SCAM',
    'FALSE_INFORMATION',
  ]),
})

type ReportForm = z.infer<typeof reportForm>

export interface ReportPublicationDialogProps {
  publicationId: string
}

export function ReportPublicationDialog({
  publicationId,
}: ReportPublicationDialogProps) {
  const {
    handleSubmit,
    setValue,
    formState: { isSubmitting },
  } = useForm<ReportForm>()

  const { mutateAsync: report } = useMutation({
    mutationFn: reportPublication,
  })

  async function handleReport(data: ReportForm) {
    try {
      await report({
        user: {},
        publication: {
          id: publicationId,
        },
        reason: data.reason,
      })

      window.location.reload()
    } catch {
      toast.error('Erro ao denunciar pruu.')
    }
  }

  return (
    <DialogContent className="max-w-lg mx-auto">
      <DialogHeader>
        <DialogTitle>Denunciar</DialogTitle>
        <DialogDescription>Qual o motivo da sua denuncia?</DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit(handleReport)} className="space-y-4">
        <RadioGroup
          className="py-3 space-y-3"
          onValueChange={(value) => setValue('reason', value)}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="SPAM" id="SPAM" />
            <Label htmlFor="SPAM">Spam</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="HATE_SPEECH" id="HATE_SPEECH" />
            <Label htmlFor="HATE_SPEECH">Discurso de ódio</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="BULLYING_OR_HARASSMENT"
              id="BULLYING_OR_HARASSMENT"
            />
            <Label htmlFor="BULLYING_OR_HARASSMENT">Bullying ou assédio</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="SCAM" id="SCAM" />
            <Label htmlFor="SCAM">Golpe</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="FALSE_INFORMATION" id="FALSE_INFORMATION" />
            <Label htmlFor="FALSE_INFORMATION">Informação falsa</Label>
          </div>
        </RadioGroup>
        <Button
          disabled={isSubmitting}
          className="w-full bg-primary"
          type="submit"
        >
          <Megaphone />
          Denunciar
        </Button>
      </form>
    </DialogContent>
  )
}
