import { Bird } from 'lucide-react'
import { Outlet } from 'react-router-dom'

import { MiniAdminCard } from '@/components/mini-admin-card'
import { SearchAndFilters } from '@/components/search-and-filters'
import { ThemeToggle } from '@/components/theme/theme-toggle'
import { Card } from '@/components/ui/card'

export function AdminLayout() {
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
        <MiniAdminCard />
      </div>

      <div className="overflow-y-auto scrollbar-hide">
        <Outlet />
      </div>

      <div className="flex flex-col border-l border-foreground/15 p-7 gap-3 sticky top-0 h-screen">
        <SearchAndFilters />
        <Card className="flex flex-col gap-3 justify-center p-4">
          <div className="flex gap-3 items-center text-foreground font-semibold">
            <div className="bg-foreground w-3 h-3 p-0 m-0 rounded-full" />
            <span className="leading-none">Total</span>
          </div>
          <div className="flex gap-3 items-center text-foreground font-semibold">
            <div className="bg-yellow-500 w-3 h-3 p-0 m-0 rounded-full" />
            <span className="leading-none">Pendentes</span>
          </div>
          <div className="flex gap-3 items-center text-foreground font-semibold">
            <div className="bg-rose-500 w-3 h-3 p-0 m-0 rounded-full" />
            <span className="leading-none">Rejeitadas</span>
          </div>
          <div className="flex gap-3 items-center text-foreground font-semibold">
            <div className="bg-green-500 w-3 h-3 p-0 m-0 rounded-full" />
            <span className="leading-none">Aprovadas</span>
          </div>
        </Card>
      </div>
    </div>
  )
}
