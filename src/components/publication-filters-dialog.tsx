import { Search } from 'lucide-react'

import { Button } from './ui/button'
import { Checkbox } from './ui/checkbox'
import { DatePickerWithRange } from './ui/date-picker-with-range'
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'

export function PublicationFiltersDialog() {
  return (
    <DialogContent className="max-w-lg mx-auto">
      <DialogHeader>
        <DialogTitle>Filtros</DialogTitle>
        <DialogDescription>
          Procure por publicações com mais precisão!
        </DialogDescription>
      </DialogHeader>

      <form className="space-y-4">
        <Label>Texto do pruu</Label>
        <Textarea
          placeholder="Ex: Aqui suas ideias ganham asas"
          className="resize-none"
          id="publication-text"
        />
        <div className="flex gap-12">
          <div className="flex flex-col gap-2">
            <Label>Data de criação</Label>
            <DatePickerWithRange id="date-picker" />
          </div>
          <div className="flex items-center space-x-2 mt-5">
            <Checkbox id="curtido" className="w-5 h-5" />
            <label
              htmlFor="curtido"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Curtido
            </label>
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
