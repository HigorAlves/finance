import { Button, Container, Grid, Stack, Title } from '@mantine/core'

export default function WalletPage() {
  return (
    <Container fluid>
      <Title>Wallets</Title>

      <Grid mt={'xl'}>
        <Grid.Col md={3}>
          <Stack>
            <Button>Add new Wallet</Button>
            <Button>Add new Credit Card</Button>
          </Stack>
        </Grid.Col>
      </Grid>
    </Container>
  )
}
