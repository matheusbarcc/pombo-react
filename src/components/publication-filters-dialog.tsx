import { Search } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { useFilters } from '@/pages/_layouts/app'

import { Button } from './ui/button'
import { Checkbox } from './ui/checkbox'
import { DatePicker } from './ui/date-picker'
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'

const filtersFormSchema = z.object({
  content: z.string(),
  createdAtStart: z.string(),
  createdAtEnd: z.string(),
  isLiked: z.boolean(),
})

type FilterForm = z.infer<typeof filtersFormSchema>

export function PublicationFiltersDialog() {
  const { setFilters } = useFilters()

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { isSubmitting },
  } = useForm<FilterForm>({
    defaultValues: {
      isLiked: false,
    },
  })

  async function handleSetFilters(data: FilterForm) {
    // console.log('Filters submitted:', data)
    setFilters(data)
  }

  const isLiked = watch('isLiked') === true

  return (
    <DialogContent className="max-w-lg mx-auto">
      <DialogHeader>
        <DialogTitle>Filtros</DialogTitle>
        <DialogDescription>
          Procure por publicações com mais precisão!
        </DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit(handleSetFilters)} className="space-y-4">
        <Label>Texto do pruu</Label>
        <Textarea
          placeholder="Ex: Aqui suas ideias ganham asas"
          className="resize-none"
          id="content"
          {...register('content')}
        />
        <div className="flex gap-12">
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
          <div className="flex items-center space-x-2 mt-5">
            <Checkbox
              id="curtido"
              className="w-5 h-5"
              checked={isLiked}
              onCheckedChange={(checked) => setValue('isLiked', !!checked)}
              {...register('isLiked')}
            />
            <label
              htmlFor="isLiked"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Curtido
            </label>
          </div>
        </div>
        <Button
          disabled={isSubmitting}
          className="w-full bg-primary"
          type="submit"
        >
          <Search />
          Pesquisar
        </Button>
      </form>
    </DialogContent>
  )
}
