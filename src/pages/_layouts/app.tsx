import { Bird, Plus } from 'lucide-react'
import { Outlet } from 'react-router-dom'

import { MiniProfileCard } from '@/components/mini-profile-card'
import { SearchAndFilters } from '@/components/search-and-filters'
import { ThemeToggle } from '@/components/theme/theme-toggle'
import { Button } from '@/components/ui/button'

export function AppLayout() {
  return (
    <div className="grid min-h-screen grid-cols-[1fr_2fr_1fr] px-52 antialiased gap-4">
      <div className="flex flex-col border-r border-foreground/15 p-7 gap-6 scroll sticky top-0 h-screen">
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <Bird className="h-8 w-8" />
            <span className="font-bold text-2xl">pombo</span>
          </div>
          <ThemeToggle />
        </div>
        <MiniProfileCard />
        <Button className="font-bold text-lg h-12 flex">
          <Plus />
          Novo Pruu
        </Button>
      </div>

      <div className="overflow-y-auto scrollbar-hide">
        <Outlet />
      </div>

      <div className="flex flex-col border-l border-foreground/15 p-7 gap-3 sticky top-0 h-screen">
        <SearchAndFilters />
      </div>
    </div>
  )
}
