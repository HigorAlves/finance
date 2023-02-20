import React, { useState } from "react";

import { Container, Navbar, Title, Tooltip, UnstyledButton } from "@mantine/core";
import { IconHome2 } from "@tabler/icons";
import Link from "next/link";
import { useRouter } from "next/router";

import { Logo } from "~/components";

import { useStyles } from "./dashboard.styles";

const mainLinksMockdata = [
	{ icon: IconHome2, label: 'Home', link: '/dashboard' },
]

const innerMenuLinks = [
	{ link: '/dashboard', name: 'Dashboard' },
	{ link: '/dashboard/activity', name: 'Activity' },
	{ link: '/dashboard/account', name: 'Wallets' },
	{ link: '/dashboard/account', name: 'Budgets' },
	{ link: '/dashboard/account', name: 'Account' },
]

interface Props {
	children: React.ReactNode
}

export function DashboardLayout({ children }: Props) {
	const { classes, cx } = useStyles()
	const { pathname } = useRouter()
	const [active, setActive] = useState('Dashboard')

	const mainLinks = mainLinksMockdata.map((link) => (
		<Tooltip
			label={link.label}
			position="right"
			withArrow
			transitionDuration={0}
			key={link.label}
		>
			<UnstyledButton
				onClick={() => setActive(link.label)}
				className={cx(classes.mainLink, {
					[classes.mainLinkActive]: pathname.includes(link.link),
				})}
			>
				<link.icon />
			</UnstyledButton>
		</Tooltip>
	))

	const links = innerMenuLinks.map((option) => (
		<Link
			key={option.link}
			href={option.link}
			className={cx(classes.link, {
				[classes.linkActive]: pathname === option.link,
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
						<div className={classes.logo}>
							<Logo />
						</div>
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
