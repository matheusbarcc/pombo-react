import { Search } from 'lucide-react'

import { Button } from './ui/button'
import { DatePickerWithRange } from './ui/date-picker-with-range'
import { DialogContent, DialogHeader, DialogTitle } from './ui/dialog'
import { Label } from './ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'

export function ComplaintFiltersDialog() {
  return (
    <DialogContent className="max-w-lg mx-auto">
      <DialogHeader>
        <DialogTitle>Filtros</DialogTitle>
      </DialogHeader>

      <form className="space-y-4">
        <div className="flex gap-5">
          <div className="w-1/2">
            <Label>Motivo</Label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Todos" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="spam">Spam</SelectItem>
                <SelectItem value="hate_speech">Discurso de Ódio</SelectItem>
                <SelectItem value="bullying_or_harassment">
                  Assédio ou Bullying
                </SelectItem>
                <SelectItem value="scam">Golpe</SelectItem>
                <SelectItem value="false_information">
                  Informação Falsa
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-1/2">
            <Label>Status</Label>
            <Select>
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

        <div className="gap-2 w-full">
          <Label>Data de criação</Label>
          <DatePickerWithRange id="date-picker" className="w-full" />
        </div>
        <Button className="w-full bg-primary" type="submit">
          <Search />
          Pesquisar
        </Button>
      </form>
    </DialogContent>
  )
}
