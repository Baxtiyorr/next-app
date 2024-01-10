import Image from 'next/image'
import './Liquid.css'
import coctail from '../../assets/images/pexels.png'

const Liquid = () => {
  return (
    <section>
      <div className="container">
        <div className="liquid">
            <div className="liquid__content">
                <div className="liquid__content-img">
                <Image
                    src={coctail}
                    alt='coctail'
                />
                </div>
                <div className="liquid__content-text">
                    <h2> Liquid Maestro, the newest hotspot in downtown <a href="#">Los Angeles.</a>  Our skilled mixologists are passionate about crafting exceptional cocktails that will delight your senses. </h2>
                <p>With an ambiance that exudes elegance and a commitment to delivering unforgettable experiences, Liquid Maestro is the ultimate destination for cocktail enthusiasts. Join us for an exquisite journey into the world of liquid artistry.</p>
                </div>
                
            </div>
        </div>
      </div>
    </section>
  )
}

export default Liquid
