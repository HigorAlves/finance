import React from "react";

import { Navbar as Wrapper, Tooltip, UnstyledButton } from "@mantine/core";
import { IconHome2 } from "@tabler/icons";
import Link from "next/link";
import { useRouter } from "next/router";

import { useStyles } from "./Navbar.styles";

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

export function Navbar() {
  const { pathname } = useRouter()
  const { classes, cx } = useStyles()

  const mainLinks = mainLinksMockdata.map((link) => (
    <Tooltip
      label={link.label}
      position="right"
      withArrow
      transitionDuration={0}
      key={link.label}
    >
      <UnstyledButton
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
    >
      {option.name}
    </Link>
  ))

  return (
    <Wrapper width={{ sm: 300 }}>
      <Wrapper.Section grow className={classes.wrapper}>
        <div className={classes.aside}>{mainLinks}</div>
        <div className={classes.main}>{links}</div>
      </Wrapper.Section>
    </Wrapper>
  )
}
