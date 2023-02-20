import React, { useState } from 'react'

import {
	Navbar,
	UnstyledButton,
	Tooltip,
	Title,
	Container
} from '@mantine/core'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { useStyles } from './dashboard.styles'
const mainLinksMockdata = [{ icon: <div>as</div>, label: 'Home' }]

const innerMenuLinks = [
	{ link: '/dashboard', name: 'Dashboard' },
	{ link: '/dashboard/activity', name: 'Activity' },
	{ link: '/dashboard/account', name: 'Wallets' },
	{ link: '/dashboard/account', name: 'Budgets' },
	{ link: '/dashboard/account', name: 'Account' }
]

interface Props {
	children: React.ReactNode
}

export function DashboardLayout({ children }: Props) {
	const { classes, cx } = useStyles()
	const { pathname } = useRouter()
	const [active, setActive] = useState('Dashboard')

	const mainLinks = mainLinksMockdata.map(link => (
		<Tooltip
			label={link.label}
			position='right'
			withArrow
			transitionDuration={0}
			key={link.label}
		>
			<UnstyledButton
				onClick={() => setActive(link.label)}
				className={cx(classes.mainLink, {
					[classes.mainLinkActive]: link.label === active
				})}
			>
				ICO
			</UnstyledButton>
		</Tooltip>
	))

	const links = innerMenuLinks.map(option => (
		<Link
			key={option.link}
			href={option.link}
			className={cx(classes.link, {
				[classes.linkActive]: pathname === option.link
			})}
			onClick={() => setActive(option.name)}
		>
			{option.name}
		</Link>
	))

	return (
		<main style={{ display: 'flex' }}>
			<Navbar width={{ sm: 300 }}>
				<Navbar.Section grow className={classes.wrapper}>
					<div className={classes.aside}>
						<div className={classes.logo}>logo</div>
						{mainLinks}
					</div>
					<div className={classes.main}>
						<Title order={4} className={classes.title}>
							{active}
						</Title>
						{links}
					</div>
				</Navbar.Section>
			</Navbar>

			<Container fluid>{children}</Container>
		</main>
	)
}
