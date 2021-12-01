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

export default function Index() {
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
              Hello
            </Typography>
            <Typography variant='body1'>
              This is a starter template for using MUI in Remix.
            </Typography>
            <Typography variant='body1'>
              Head to{' '}
              <Link
                href='https://docs.remix.run/'
                target='_blank'
                rel='noreferrer'
                underline='hover'
              >
                Remix docs
              </Link>{' '}
              to learn more about Remix. And head to{' '}
              <Link
                href='https://mui.com/'
                target='_blank'
                rel='noreferrer'
                underline='hover'
              >
                MUI
              </Link>{' '}
              to explore MUI.
            </Typography>
            <Typography variant='body2'>
              <Link component={RouterLink as any} to='test' underline='hover'>
                Test Route
              </Link>
            </Typography>
          </Stack>
        </CardContent>
        <CardActions>
          <Link component={RouterLink as any} to='404' underline='hover'>
            Handle 404
          </Link>
        </CardActions>
      </Card>
    </Center>
  )
}
