import { Bird } from 'lucide-react'

import { Button } from './ui/button'
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

export function NewPublicationDialog() {
  return (
    <DialogContent className="max-w-lg mx-auto">
      <DialogHeader>
        <DialogTitle>Novo pruu</DialogTitle>
        <DialogDescription>
          O que você está pensando? Diga pro mundo!
        </DialogDescription>
      </DialogHeader>

      <form className="space-y-4">
        <Textarea
          placeholder="Ex: Aqui suas ideias ganham asas"
          className="resize-none"
          id="text"
        />
        <Input type="file" />
        <Button className="w-full bg-primary" type="submit" id="file">
          <Bird />
          Publicar
        </Button>
      </form>
    </DialogContent>
  )
}
