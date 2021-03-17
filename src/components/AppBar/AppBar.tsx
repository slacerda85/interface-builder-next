import { useState } from 'react'
import {
  AppBar as MuiAppBar,
  IconButton,
  Toolbar,
  Container,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import Brightness7Icon from '@material-ui/icons/Brightness7'
import Brightness4Icon from '@material-ui/icons/Brightness4'
import { makeStyles, fade } from '@material-ui/core/styles'

// Componentes próprios
import Drawer from './modules/Drawer'
interface AppBarProps {
  darkMode: boolean
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: fade(theme.palette.background.paper, 0.9),
    backdropFilter: 'saturate(180%) blur(20px)',
    color: theme.palette.text.primary,
  },
  grow: {
    flexGrow: 1,
  },
}))

const AppBar: React.FC<AppBarProps> = ({ darkMode, setDarkMode }) => {
  const classes = useStyles()

  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <>
    <MuiAppBar className={classes.root} position="sticky">
      <Container maxWidth={false} disableGutters>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setDrawerOpen((prevState) => !prevState)}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.grow}></div>
          <IconButton
            edge="end"
            onClick={() => setDarkMode((prevState) => !prevState)}
            aria-label="change-color"
            color="inherit"
          >
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </Container>      
    </MuiAppBar>
    <Drawer open={drawerOpen} onClose={setDrawerOpen}></Drawer>
    </>
  )
}

export default AppBar
