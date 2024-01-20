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
import AddCircleIcon from '@mui/icons-material/AddCircle';
import TocIcon from '@mui/icons-material/Toc';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/actions/usersActions';
import { useSelector } from 'react-redux';
import { MainState, User } from '../Types';


export default function NavMenu() {

  const navigate:any = useNavigate();
  const [openMenu,setOpenMenu] = React.useState<boolean>(false);
  const dispatch:any = useDispatch();
  const user:User = useSelector((state:MainState)=>state.userReducer.user);

  const navigateTo = (url:string)=>{
    setOpenMenu(false);
    navigate(url);
  }

  return (
    <div>
          <Button onClick={()=>setOpenMenu(true)}><MenuIcon style={{color:'white'}} /></Button>
          <SwipeableDrawer
            anchor='right'
            open={openMenu}
            onClose={()=>setOpenMenu(false)}
            onOpen={()=>setOpenMenu(true)}
          >

          <div className='nav-menu-header'>
            {user && <h4>{user.userName}</h4>}
          </div>
          <Divider />
          {user && 
          <List className='menu-link'>
              <ListItem  onClick={()=>navigateTo('/')}>
                <ListItemButton>
                  <ListItemIcon>
                      <HomeIcon />
                  </ListItemIcon>
                  <ListItemText  primary={'עמוד הבית'} />
                  </ListItemButton>
              </ListItem>
              <ListItem onClick={()=>navigateTo('/new-list')}>
                <ListItemButton>
                  <ListItemIcon>
                      <AddCircleIcon/>
                  </ListItemIcon>
                  <ListItemText  primary={'רשימה חדשה'} />
                  </ListItemButton>
              </ListItem>
              <ListItem onClick={()=>navigateTo('/my-lists')}>
                <ListItemButton>
                  <ListItemIcon>
                      <TocIcon/>
                  </ListItemIcon>
                  <ListItemText  primary={'הרשימות שלי'} />
                  </ListItemButton>
              </ListItem>
              <ListItem onClick={()=>dispatch(logout())}>
                <ListItemButton>
                  <ListItemIcon>
                      <LogoutIcon/>
                  </ListItemIcon>
                  <ListItemText  primary={'התנתק'} />
                  </ListItemButton>
              </ListItem>
              <Divider />
              {user.isAdmin && 
              <>
              <ListItem onClick={()=>navigateTo('/admin/all-products')}>
                <ListItemButton>
                  <ListItemIcon>
                      <HomeIcon/>
                  </ListItemIcon>
                  <ListItemText primary={'מאגר המוצרים'} />
                  </ListItemButton>
              </ListItem>
              <ListItem onClick={()=>navigateTo('/admin/add-product')}>
                <ListItemButton>
                  <ListItemIcon>
                      <HomeIcon/>
                  </ListItemIcon>
                  <ListItemText primary={'הוסף מוצא למאגר'} />
                  </ListItemButton>
              </ListItem>
              </>
            } 

          </List>
           

          }
          {!user && 
          <List className='menu-link' style={{direction:'rtl'}}>
          <ListItem  onClick={()=>navigateTo('/')}>
            <ListItemButton>
              <ListItemIcon>
                  <HomeIcon/>
              </ListItemIcon>
              <ListItemText primary={'עמוד הבית'} />
              </ListItemButton>
          </ListItem>
          <ListItem onClick={()=>navigateTo('/login')}>
            <ListItemButton>
              <ListItemIcon>
                  <HomeIcon/>
              </ListItemIcon>
              <ListItemText primary={'התחבר'} />
              </ListItemButton>
          </ListItem>
      </List>
          
          }

   
      <List>
      
      </List>
          </SwipeableDrawer>
    
    </div>
  );
}
