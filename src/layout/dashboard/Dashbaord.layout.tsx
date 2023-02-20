import { useState } from 'react'

import { Navbar, UnstyledButton, Tooltip, Title } from '@mantine/core'

import { useStyles } from './dashboard.styles'

const mainLinksMockdata = [
  { icon: <div>as</div>, label: 'Home' },
  { icon: <div>as</div>, label: 'Settings' }
]

const linksMockdata = [
  'Security',
  'Settings',
  'Dashboard',
  'Releases',
  'Account',
  'Orders',
  'Clients',
  'Databases',
  'Pull Requests',
  'Open Issues',
  'Wiki pages',
]

interface Props {
  children: React.ReactNode
}

export function DashboardLayout({ children }: Props) {
  const { classes, cx } = useStyles()
  const [active, setActive] = useState('Releases')
  const [activeLink, setActiveLink] = useState('Settings')

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
          [classes.mainLinkActive]: link.label === active,
        })}
      >
        ICO
      </UnstyledButton>
    </Tooltip>
  ))

  const links = linksMockdata.map((link) => (
    <a
      className={cx(classes.link, {
        [classes.linkActive]: activeLink === link
      })}
      href="/"
      onClick={(event) => {
        event.preventDefault()
        setActiveLink(link)
      }}
      key={link}
    >
      {link}
    </a>
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
      {children}
    </main>
  )
}
