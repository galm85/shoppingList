import * as React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/actions/usersActions';



export default function NavMenu() {

  const navigate:any = useNavigate();
  const [openMenu,setOpenMenu] = React.useState<boolean>(false);
  const dispatch:any = useDispatch();

  const navigateTo = (url:string)=>{
    setOpenMenu(false);
    navigate(url);
  }

  return (
    <div>
          <Button onClick={()=>setOpenMenu(true)}><MenuIcon/></Button>
          <SwipeableDrawer
            anchor='right'
            open={openMenu}
            onClose={()=>setOpenMenu(false)}
            onOpen={()=>setOpenMenu(true)}
          >

          <div className='nav-menu-header'>
            <h4>תפריט</h4>
          </div>
          <Divider/>
          <List className='menu-link' style={{direction:'rtl'}}>
              <ListItem  onClick={()=>navigateTo('/')}>
                <ListItemButton>
                  <ListItemIcon>
                      <HomeIcon/>
                  </ListItemIcon>
                  <ListItemText primary={'עמוד הבית'} />
                  </ListItemButton>
              </ListItem>
              <ListItem onClick={()=>navigateTo('/new-list')}>
                <ListItemButton>
                  <ListItemIcon>
                      <HomeIcon/>
                  </ListItemIcon>
                  <ListItemText primary={'רשימה חדשה'} />
                  </ListItemButton>
              </ListItem>
              <ListItem onClick={()=>navigateTo('/new-list')}>
                <ListItemButton>
                  <ListItemIcon>
                      <HomeIcon/>
                  </ListItemIcon>
                  <ListItemText primary={'הרשימות שלי'} />
                  </ListItemButton>
              </ListItem>
              <ListItem onClick={()=>navigateTo('/admin/add-product')}>
                <ListItemButton>
                  <ListItemIcon>
                      <HomeIcon/>
                  </ListItemIcon>
                  <ListItemText primary={'הוסף מוצר'} />
                  </ListItemButton>
              </ListItem>
              <ListItem onClick={()=>dispatch(logout())}>
                <ListItemButton>
                  <ListItemIcon>
                      <HomeIcon/>
                  </ListItemIcon>
                  <ListItemText primary={'התנתק'} />
                  </ListItemButton>
              </ListItem>
          </List>


      <Divider />
      <List>
      
      </List>
          </SwipeableDrawer>
    
    </div>
  );
}
