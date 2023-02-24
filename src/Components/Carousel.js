import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import axios from 'axios';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Carousel = (props) => {

  const [carousel, setCarousel]  = React.useState([])
  

  const getData = async () => {
    const {data} = await axios.get("http://localhost:5002/getProducts")

    if(data){
      setCarousel(data)
    }
  }

  React.useEffect(() =>{
    getData()
  }, [])

  
  return (
   <div className='carousel-box'>
    <Swiper className='omm'
    data-aos="zoom-in"
      modules={[Navigation, Scrollbar, A11y]}
      spaceBetween={1}
      slidesPerView={5}
      navigation
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
         { 
      carousel.slice(18, 27).map(({_id, title, img, price, inCart, category}) => {
          return(
            <SwiperSlide><img src={img} /></SwiperSlide>
          )
      })
     }

    </Swiper>
    </div>
  )
}

export default Carousel