import { useState } from 'react'
import Image from 'next/image'
// material-ui
import {
  Drawer as MuiDrawer,
  ListSubheader,
  Typography,
  Hidden,
  List,
  ListItem,
  ListItemText,
  Collapse,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { ExpandLess, ExpandMore } from '@material-ui/icons'

// Dados do menu
import { menu } from '../../../../config/menu'

const useStyles = makeStyles((theme) => ({
  list: {
    color: theme.palette.text.primary,
  },
  toolbar: theme.mixins.toolbar,
  menuTitle: {
    color: theme.palette.text.primary,
    padding: theme.spacing(2),
    display: 'flex',    
    alignItems: 'center',
  },
  drawerPaper: {
    width: theme.spacing(30),
  },
}))

interface DrawerProps {
  open: boolean
  onClose: React.Dispatch<React.SetStateAction<boolean>>
}

interface ListOpenArray {
  [key: number]: boolean
}

const Drawer: React.FC<DrawerProps> = ({ open, onClose }) => {
  // estilos
  const classes = useStyles()

  // estado da lista (aberto ou fechado)
  const [menuOpen, setMenuOpen] = useState<ListOpenArray>({})
  const [sbmOpen, setSbmOpen] = useState<ListOpenArray>({})
  

  // Abre ou fecha uma opção do menu
  const handleMenuClick = (id: number) => {
    setMenuOpen((prevState) => ({ ...prevState, [id]: !prevState[id] }))
  }

  const handleSbmClick = (id: number) => {
    setSbmOpen((prevState) => ({ ...prevState, [id]: !prevState[id] }))
  }

  const drawerOptions = (
    <div>
      <List
        className={classes.list}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader
            className={classes.menuTitle}
            component="div"
            id="menu-subheader"
            disableGutters
          >
            <Image src="/a.png" width="30px" height="30px" alt="sumaq logo" />
            <Typography variant="h6">Builder Menu</Typography>
          </ListSubheader>
        }
      >
        {menu.map((m) => (
          <div key={m.id}>
            <ListItem button onClick={() => handleMenuClick(m.id)}>
              <ListItemText primary={m.name} />
              {menuOpen[m.id] ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={menuOpen[m.id]} timeout="auto" unmountOnExit>
              <List>
                {m.submenu.map((sbm) => (
                  <div key={sbm.id}>
                    <ListItem button>
                      <ListItemText disableTypography onClick={() => handleSbmClick(sbm.id)}>
                        <Typography variant="body1">{sbm.name}</Typography>
                      </ListItemText>
                    </ListItem>
                    <Collapse in={sbmOpen[sbm.id]} timeout="auto" unmountOnExit>
                      <List>
                        {sbm.options.map((option, index) => (
                          <div key={index}>
                          <ListItem button>
                            <ListItemText disableTypography>
                              <Typography variant="body2">{option}</Typography>
                            </ListItemText>
                          </ListItem>
                          </div>
                        ))}
                      </List>
                    </Collapse>
                  </div>
                ))}
              </List>
            </Collapse>
          </div>
        ))}
      </List>
    </div>
  )

  return (
    <div>
      <Hidden mdUp implementation="css">
        <MuiDrawer
          variant="temporary"
          anchor="left"
          open={open}
          onClose={() => onClose((prevState) => !prevState)}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawerOptions}
        </MuiDrawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <MuiDrawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawerOptions}
        </MuiDrawer>
      </Hidden>
    </div>
  )
}

export default Drawer
