import React from 'react'
import NavMenu from './NavMenu'
import LogoImage from '../assets/logo.jpeg';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {

  const navigate:any = useNavigate();

  return (
    <nav className='navbar'>
      {/* <img onClick={()=>navigate('/')} src={LogoImage} alt="logo" style={{width:'50px',borderRadius:'50%'}} /> */}
      <h3 onClick={()=>navigate('/')} className='navbar__title'>הקניות של אלמוג</h3>

      <div>
        <NavMenu/>
      </div>
    </nav>
  )
}

export default Navbar