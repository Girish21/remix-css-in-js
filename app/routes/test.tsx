import type { MetaFunction, LoaderFunction } from 'remix'
import { Link as RouterLink, json, useLoaderData } from 'remix'

import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import Box from '@mui/system/Box'
import styled from '@mui/system/styled'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import { Link, Stack } from '@mui/material'

export let meta: MetaFunction = () => {
  return {
    title: 'Remix Starter',
    description: 'Welcome to remix!',
  }
}

const Center = styled('div')(() => ({
  flexGrow: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}))

export default function Test() {
  return (
    <Center>
      <Card
        sx={{
          width: 'min(80%, 24rem)',
        }}
      >
        <CardContent>
          <Stack spacing={2}>
            <Typography variant='h4' component='h1'>
              Test Route
            </Typography>
            <Typography variant='body1'>Some test content</Typography>
            <Button>Button</Button>
          </Stack>
        </CardContent>
      </Card>
    </Center>
  )
}
