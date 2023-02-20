
import axios from 'axios'
import queryString from 'query-string'
import { Link } from 'react-router-dom'
import React from 'react'
import { useLocation } from 'react-router-dom'
import { Card } from 'antd';
const { Meta } = Card;

function View() {


    const [data, setData] = React.useState([])

    const location = useLocation()

    const { id } = queryString.parse(location.search)
    const addToCart = async  () => {
      await axios.patch('https://apple-store-app.herokuapp.com/addToCart', {
        id: id
      }).then(window.location.reload())
    }

    const getData = async () => {
        const { data } = await axios.get('https://apple-store-app.herokuapp.com/getProducts')
        if (data) {
            const found = data.find(item => item._id == id ? item : "")
            if (found) {
                setData(found)
            }
        }
    }



    React.useEffect(() => {
        getData()
    }, [id, location.search])

    return (
      <div className='main-detail-cont'>
      <div className='left-detail-cont'>
        <div className='detaili-photo-cont'>
          <img src={data?.img} />
        </div>
      </div>
      <div className='right-detail-cont'>
        <p>{data?.title}</p>
       <div className='price-cont'>
        <p>{`Price: $${data?.price}`}</p>
        </div>
        <div className='main-color-memory-cont'>
          <div className='main-color-cont'>
            <p>Color:</p>
            <div className="color-item" >
                <div className="circle1"></div>
                <div className="circle2"></div>
                <div className="circle3"></div>
                <div className="circle4"></div>
              </div>
          </div>
          <div className='main-memory-cont'>
            <p>Memory:</p>
            <button>128 GB</button>
            <button>256 GB</button>
            <button>512 GB</button>
            <button>1 TB</button>
          </div>
        </div>
        <div class="product-cart-container">
            <div class="add-cart-box">
              {
                data?.inCart == false 
                ? 
                <button className='add-to-cart' onClick={addToCart}>add to cart</button>
                : 
                <Link className='link' to="/cart"><button  className='add-to-cart'>Go to Cart</button></Link>
            }
              {/* <div class="add-to-cart">
                <span><strong>Add to cart</strong></span>
              </div> */}
            </div>
            <div class="by-product">
              <span><strong>Boy Product</strong></span>
            </div>
          </div>
      </div>
      </div>
      //   <div className='page'>
      //   <section className=' container'>
      //     <div className='row col-lg-12 justify-content-center'>
      //     <Card className='m-card'
      //       hoverable
      //       style={{
      //           width: 340,
      //       }}
      //       cover={<img alt="example" src={data?.img} />}
      //   >
      //       <Meta title={data?.title} description={`Price: $${data?.price}`} />
      //       {
      //           data?.inCart == false 
      //           ? 
      //           <button className='card-button' onClick={addToCart}>add to cart</button>
      //           : 
      //           <Link to="/cart"><button  className='card-button'>Go to Cart</button></Link>
      //       }
      //   </Card>
      //     </div> 
      //   </section>
      // </div>
        // <div className='page'>
        // <section className=' container'>
        // <div className='row col-lg-12 justify-content-center'>
        //     <img style={{height: "200px"}} src={data?.img} />
        // </div>
        // </section>
        // </div>
        // <div className='slider'>
        //     <img src={data?.img} alt="" />
        //     <div><h3>{data?.title}</h3></div>
        // </div>
    )
}

export default View