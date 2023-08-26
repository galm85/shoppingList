import React from 'react'
import NavMenu from './NavMenu'

const Navbar = () => {
  return (
    <nav className='navbar'>

      <h3>Shopping List</h3>

      <div>
        <NavMenu/>
      </div>
    </nav>
  )
}

export default Navbar