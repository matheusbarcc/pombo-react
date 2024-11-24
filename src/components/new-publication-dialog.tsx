import { useMutation } from '@tanstack/react-query'
import { Bird } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { createPublication } from '@/api/create-publication'

import { Button } from './ui/button'
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

const newPublicationForm = z.object({
  content: z.string(),
})

type NewPublicationForm = z.infer<typeof newPublicationForm>

export function NewPublicationDialog() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<NewPublicationForm>()

  const { mutateAsync: newPublication } = useMutation({
    mutationFn: createPublication,
  })

  async function handleNewPublication(data: NewPublicationForm) {
    try {
      await newPublication({
        user: {},
        content: data.content,
      })

      window.location.reload()
    } catch {
      toast.error('Erro ao criar pruu.')
    }
  }

  return (
    <DialogContent className="max-w-lg mx-auto">
      <DialogHeader>
        <DialogTitle>Novo pruu</DialogTitle>
        <DialogDescription>
          O que você está pensando? Diga pro mundo!
        </DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit(handleNewPublication)} className="space-y-4">
        <Textarea
          placeholder="Ex: Aqui suas ideias ganham asas"
          className="resize-none"
          id="content"
          {...register('content')}
        />
        <Input type="file" />
        <Button
          disabled={isSubmitting}
          className="w-full bg-primary"
          type="submit"
          id="file"
        >
          <Bird />
          Pruublicar
        </Button>
      </form>
    </DialogContent>
  )
}
