"use client"

import { AtSignIcon as Atop } from 'lucide-react'
import Link from 'next/link'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"

const navigation = {
  main: [
    {
      title: "Dashboard",
      items: [
        {
          title: "Overview",
          href: "/dashboard",
        },
        {
          title: "Bank Accounts",
          href: "/dashboard/accounts",
        },
        {
          title: "Transactions",
          href: "/dashboard/transactions",
        },
      ],
    },
    {
      title: "Settings",
      items: [
        {
          title: "Profile",
          href: "/settings/profile",
        },
        {
          title: "Preferences",
          href: "/settings/preferences",
        },
        {
          title: "Developer Console",
          href: "/settings/developer-console",
        },
      ],
    },
  ],
}

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="border-b px-6 py-3">
        <div className="flex items-center gap-2">
          <Atop className="h-6 w-6" />
          <span className="font-semibold">voila! pilot</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {navigation.main.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton asChild>
                      <Link href={item.href}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  )
}

