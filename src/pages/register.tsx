import { Button, createStyles, Group, Indicator, Paper, PasswordInput, Text, TextInput, Title } from "@mantine/core";

import { Logo } from "~/components";

const useStyles = createStyles((theme) => ({
  wrapper: {
    height: '100vh',
    backgroundSize: 'cover',
    backgroundImage:
      'url(https://images.unsplash.com/photo-1484242857719-4b9144542727?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80)',
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    borderRight: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    height: '100vh',
    maxWidth: 450,
    paddingTop: 80,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: '100%',
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  logo: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    width: 120,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}))

export default function AuthenticationImage() {
  const { classes } = useStyles()

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Group position={'center'} mb={'xl'}>
          <Indicator
            color="red"
            label={
              <Text size={'xs'} weight={'bold'}>
                ALPHA
              </Text>
            }
            size={20}
          >
            <Logo />
          </Indicator>
        </Group>
        <Title
          order={2}
          className={classes.title}
          align="center"
          mt="md"
          mb={50}
        >
          Welcome to Finance!
        </Title>

        <TextInput label="Email address" placeholder="hello@gmail.com" />
        <PasswordInput label="Password" placeholder="Your password" mt="md" />

        <Group grow mt={'xl'}>
          <Button>Register</Button>
          <Button variant={'outline'}>I just wanna test</Button>
        </Group>
      </Paper>
    </div>
  )
}
