import Toolbar from '@mui/material/Toolbar'
import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'

const Navbar = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' component='span' sx={{ flexGrow: 1 }}>
          MUI App
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
