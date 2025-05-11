"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { useSidebar } from "@/components/ui/sidebar"
import { AlignLeft, Plus, Search } from "lucide-react"

export function SiteHeader() {
  const { toggleSidebar } = useSidebar()
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <Button size='sm' variant="ghost" onClick={toggleSidebar} className="-ml-1"><AlignLeft></AlignLeft></Button>
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <div className="flex w-full items-center">

          <div className="flex-1 flex justify-center">
            <div className="relative max-w-[450px]">
              <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground">
                <Search className="h-4 w-4" />
              </div>
              <Input type="text" placeholder="Buscar..." className="rounded-lg border shadow-md md:min-w-[450px] pl-8 max-w-[450px]"></Input>
            </div>

          </div>
          <div className="flex-none">
            <div className="flex justify-end">
              <Button variant="ghost" size='sm' className="ml-auto rounded-lg"><Plus></Plus></Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
