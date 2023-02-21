import { Avatar, Group, Header as BaseHeader } from '@mantine/core'

import { Logo } from '~/components'

import { useStyles } from './Header.styles'

interface HeaderMiddleProps {}

export function Header(props: HeaderMiddleProps) {
  const { classes } = useStyles()

  return (
    <BaseHeader height={56} className={classes.wrapper}>
      <Group ml={'md'}>
        <Logo />
      </Group>

      <Group position={'right'} mr={'md'}>
        <Avatar color="cyan" radius="xl">
          MK
        </Avatar>
      </Group>
    </BaseHeader>
  )
}
