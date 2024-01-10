import instagram from '../../assets/icons/Instagram.svg'
import facebook from '../../assets/icons/Facebook.svg'
import twitter from '../../assets/icons/Twitter.svg'
import logo from '../../assets/icons/Logo.svg'


import './Footer.css'
import Image from 'next/image'


const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="media-icons">
            <Image src={instagram} alt='instagram'/>
            <Image src={twitter} alt='twitter'/>
            <Image src={facebook} alt='facebook'/>
        </div>
        <div className="footer__content">
            <div className='copyright'>
                <h3>Copyright © 2023 XIDE</h3>
                
            </div>
            <div className='desc'>
                    <Image src={logo} alt='logo'/>
                    <p>World of extraordinary flavors & unrivaled mixology expertise    </p>
                </div>
                <div className='design'>
                    <h3>Design by <span>XIDE</span></h3>
                </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
