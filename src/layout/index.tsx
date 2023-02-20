import React, { ReactElement } from 'react'

import { DashboardLayout } from '~/layout/dashboard/Dashboard.layout'

export type LayoutTypes = 'base' | 'dashboard'

interface LayoutProps {
	layout: LayoutTypes
	children: ReactElement
}

export function Layout({ layout, children }: LayoutProps) {
	function getLayout(type: LayoutTypes) {
		const list = {
			base: <DashboardLayout>{children}</DashboardLayout>,
			dashboard: <DashboardLayout>{children}</DashboardLayout>
		}

		return list[layout] || <DashboardLayout>{children}</DashboardLayout>
	}

	return getLayout(layout)
}
