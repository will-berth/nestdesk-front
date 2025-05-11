"use client"

import * as React from "react"
import {
  IconFolder,
} from "@tabler/icons-react"

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { NavMain } from "./nav-main"
import { ChartSpline, Home } from "lucide-react"

const data = {
  navMain: [
    {
      title: "Inicio",
      url: "/dashboard/home",
      icon: Home,
    },
    {
      title: "Panel",
      url: "#",
      icon: ChartSpline,
    },
    {
      title: "Projectos",
      url: "/dashboard/projects",
      icon: IconFolder,
    }
  ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <div className="flex items-center">
          <span className="text-base font-semibold ml-2">NestDesk.</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
    </Sidebar>
  )
}
