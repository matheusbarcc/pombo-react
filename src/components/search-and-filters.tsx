import { Search, SlidersHorizontal } from 'lucide-react'

import { Button } from './ui/button'
import { Input } from './ui/input'

export function SearchAndFilters() {
  return (
    <>
      <div className="flex items-center border rounded-lg">
        <Search className="mx-3 text text-muted-foreground" />
        <Input placeholder="Pesquisar" className="border-none w-full" />
      </div>
      <div className="w-full">
        <Button variant="secondary" className="w-full">
          <SlidersHorizontal />
          Filtros
        </Button>
      </div>
    </>
  )
}
