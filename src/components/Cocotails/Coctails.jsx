import Swiper from 'swiper';
import SwiperSlide from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation';



// import './Coctails.css'

export default async function Coctails(){
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    const coctails = await response.json()
    
    return (
        <section>
          <div className="container">
            <div className="coctails-wrapper">
             <Swiper navigation={true}  className="mySwiper">
                <SwiperSlide>Slide 1</SwiperSlide>
            </Swiper>
            </div>
          </div>
        </section>
      )
}
