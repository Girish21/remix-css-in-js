import { createTheme } from '@mui/material/styles'
import { blue, red, pink } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: pink.A400,
    },
    error: {
      main: red.A700,
    },
  },
})

export default theme
