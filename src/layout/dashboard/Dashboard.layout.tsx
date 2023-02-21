import React from "react";

import { AppShell } from "@mantine/core";

import { Header } from "~/components";
import { Navbar } from "~/components/Navbar/Navbar.component";

interface Props {
  children: React.ReactNode
}

export function DashboardLayout({ children }: Props) {
  return (
    <AppShell navbar={<Navbar />} header={<Header />}>
      {children}
    </AppShell>
  )
}
