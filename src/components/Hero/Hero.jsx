import './Hero.css'
import vector from '../../assets/icons/Vector.svg'
import Image from 'next/image'

const Hero = () => {
  return (
    <>
      <div className='hero'>
        <div className="container">
            <div className="hero__content">
                <div className="hero__content-wrapper">
                    <span>Indulge in</span>
                    <h1>Liquid <br /> Artistry</h1>
                    <p>Step into a world of extraordinary flavors and unrivaled mixology expertise</p>
                    <div className='hero__btn-wrapper'>
                    <button className='hero__btn'>EXPLORE</button>
                      <Image
                        className='vector'
                        src={vector}
                        alt='vector'
                      />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Hero
