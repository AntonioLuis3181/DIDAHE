import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

function Navbar() {

    return (
        <>
         <List sx={{maxWidth: 360}}>
          <ListItem disablePadding>
          <Link to="/ejercicio2" style={{textDecoration: "none", color: "black"}}>
            <ListItemButton>
              <ListItemText primary="Visor de notas" />
            </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
          <Link to="/ejercicio3/1" style={{textDecoration: "none", color: "black"}}>  
            <ListItemButton>
              <ListItemText primary="Editor de notas" />
            </ListItemButton>
            </Link>
          </ListItem>
        </List>
        </>
    )
}

export default Navbar;