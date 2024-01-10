import './Barman.css' 
import alco from '../../assets/images/alco.png'
import barman from '../../assets/images/barman.png'
import Image from 'next/image'
const Barman = () => {
  return (
    <section className='barman-section'>
      <div className="container">
        <div className="barman__images">
            <Image
                src={alco}
                alt='alco'
                width={650}
            />
            <Image
                src={barman}
                alt='barman'
                width={650}
            />
        </div>
      </div>
    </section>
  )
}

export default Barman
