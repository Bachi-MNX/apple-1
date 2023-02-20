import React from 'react';
import { Carousel } from 'antd';
import axios from 'axios';

const contentStyle = {
    margin: 0,
    marginTop: '20px',
    height: '400px',
    color: '#fff',
    justifyContent: 'center',
    lineHeight: '160px',
    textAlign: 'center',
    background: 'black',
};
const Slider = (props) => {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };


    const [slider, setCSlider]  = React.useState([])
  

    const getData = async () => {
      const {data} = await axios.get("https://apple-store-app.herokuapp.com/getProducts")
  
      if(data){
        setCSlider(data)
      }
    }
  
    React.useEffect(() =>{
      getData()
    }, [])

    return (
        <Carousel className='slider'  afterChange={onChange} autoplay="true" dots={true} effect="fade" prevArrow={"DEded"}>
        <div className='slide_item'>
            <div className='slide_item_img' data-aos="fade-right">
                <img className='mm' src='https://icity.ge/wp-content/uploads/2022/07/hero_endframe__ea0qze85eyi6_large_2x-2-scaled.jpg'/>
            </div>
            <div className='slide_item_info' data-aos="fade-left">
            <h2><strong>MacBook Air</strong></h2>
            </div>
        </div>
        <div className='slide_item'>
            <div className='slide_item_img' data-aos="fade-right">
                <img className='mm' src='https://static.itechnics.ge/uploads/8705561b690e380af1026fdf370f7cb0f7608181f2079cb86f28dce2e53e844e.jpg'/>
            </div>
            <div className='slide_item_info' data-aos="fade-right">
            <h2><strong>MacBook Pro </strong></h2>
            <h2><strong>Supernatural Power</strong></h2>
            </div>
        </div>
        <div className='slide_item'>
            <div className='slide_item_img' data-aos="fade-right">
                <img className='mm' src='https://static.itechnics.ge/uploads/5689fff4684ff26625a9f673f19840e9664fc910533e8fd4be8cefa104467248.png'/>
            </div>
            <div className='slide_item_info' data-aos="fade-right">
            <h2><strong>AirPods Pro 2</strong></h2>
            </div>
        </div>
        <div className='slide_item'>
            <div className='slide_item_img' data-aos="fade-right">
                <img className='mm' src='https://icity.ge/wp-content/uploads/2022/09/271.001-2.webp'/>
            </div>
            <div className='slide_item_info' data-aos="fade-right">
            <h2><strong>iphone 14 512 GB</strong></h2>
            </div>
        </div>
        <div className='slide_item'>
            <div className='slide_item_img' data-aos="fade-right">
                <img className='mm' src='./img/m5.png'/>
            </div>
            <div className='slide_item_info' data-aos="fade-right">
                <h2><strong>AirPods Pro 2</strong></h2>
            </div>
        </div>
      
    </Carousel>

      
    )
}
export default Slider