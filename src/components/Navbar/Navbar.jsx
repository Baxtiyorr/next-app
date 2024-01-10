import Image from 'next/image'
import logo from '../../assets/icons/Logo.svg'
import HamburgerMenu from '../../assets/icons/HamburgerMenu.svg'


import './Navbar.css'

const Navbar = () => {
    return (
        <nav>
      <div className="container">
        <div className="navbar">
            <div className="navbar__content">
            <Image 
                src={logo}
                alt='logo'
            />
            <button className='burger-menu-btn'>

            <Image 
                src={HamburgerMenu}
                alt='hamburger menu'
            />
            </button>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
