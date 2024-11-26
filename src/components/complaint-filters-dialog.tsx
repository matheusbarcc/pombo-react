import { Search } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { useComplaintFilters } from '@/pages/_layouts/admin'

import { Button } from './ui/button'
import { DatePicker } from './ui/date-picker'
import { DialogContent, DialogHeader, DialogTitle } from './ui/dialog'
import { Label } from './ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'

const complaintFiltersFormSchema = z.object({
  reason: z.enum([
    'SCAM',
    'HATE_SPEECH',
    'BULLYING_OR_HARASSMENT',
    'SCAM',
    'FALSE_INFORMATION',
  ]),
  status: z.enum(['PENDING', 'ACCEPTED', 'REJECTED']),
  createdAtStart: z.string(),
  createdAtEnd: z.string(),
})

type ComplaintFilterForm = z.infer<typeof complaintFiltersFormSchema>

export function ComplaintFiltersDialog() {
  const { setComplaintFilters } = useComplaintFilters()

  const { handleSubmit, watch, setValue } = useForm<ComplaintFilterForm>({
    defaultValues: {
      status: 'PENDING',
    },
  })

  async function handleSetComplaintFilters(data: ComplaintFilterForm) {
    // console.log('Complaint filters: ', data)
    setComplaintFilters(data)
  }

  return (
    <DialogContent className="max-w-lg mx-auto">
      <DialogHeader>
        <DialogTitle>Filtros</DialogTitle>
      </DialogHeader>

      <form
        onSubmit={handleSubmit(handleSetComplaintFilters)}
        className="space-y-4"
      >
        <div className="flex gap-5">
          <div className="w-1/2">
            <Label>Motivo</Label>
            <Select
              onValueChange={(value) =>
                setValue('reason', value as ComplaintFilterForm['reason'])
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Todos" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="SPAM">Spam</SelectItem>
                <SelectItem value="HATE_SPEECH">Discurso de Ódio</SelectItem>
                <SelectItem value="BULLYING_OR_HARASSMENT">
                  Assédio ou Bullying
                </SelectItem>
                <SelectItem value="SCAM">Golpe</SelectItem>
                <SelectItem value="FALSE_INFORMATION">
                  Informação Falsa
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-1/2">
            <Label>Status</Label>
            <Select
              onValueChange={(value) =>
                setValue('status', value as ComplaintFilterForm['status'])
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Pendente" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pending">Pendente</SelectItem>
                <SelectItem value="accepted">Aceita</SelectItem>
                <SelectItem value="rejected">Rejeitada</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <Label htmlFor="created-at-start">Data de criação (inicio)</Label>
            <DatePicker
              value={
                watch('createdAtStart')
                  ? new Date(watch('createdAtStart'))
                  : undefined
              }
              onChange={(date) =>
                setValue('createdAtStart', date ? date.toISOString() : '')
              }
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="created-at-end">Data de criação (final)</Label>
            <DatePicker
              value={
                watch('createdAtEnd')
                  ? new Date(watch('createdAtEnd'))
                  : undefined
              }
              onChange={(date) =>
                setValue('createdAtEnd', date ? date.toISOString() : '')
              }
            />
          </div>
        </div>
        <Button className="w-full bg-primary" type="submit">
          <Search />
          Pesquisar
        </Button>
      </form>
    </DialogContent>
  )
}
