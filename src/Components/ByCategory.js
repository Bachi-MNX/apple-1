import React from 'react'
import queryString from 'query-string'
import { useLocation } from 'react-router-dom'
import { Card } from 'antd';
import axios from 'axios';
import Product from './Product';




const { Meta } = Card;

function ByCategory(props) {
    const [state, setState] = React.useState(props.inCart)

    const [data, setData] = React.useState([])

    const location = useLocation()

    const { category } = queryString.parse(location.search)

    const search = async () => {
        const { data } = await axios.get('http://localhost:5002/getProducts')
        if (data) {
            var items = []
            data.map(item => item.category.toLowerCase().includes(category.toLowerCase()) ? items.push(item) : "")
            setData(items)
        }
    }



    React.useEffect(() => {
        search()
    }, [category])

    return (
        <div className='page'>
        <section className=' container'>
          <div className='row gap-4 '>
        {
              data ? data?.map(item => (
                        // <Link to={`/view?&id=${item.id}`}>
                         <Product 
                          title={item.title} 
                          img={item.img} 
                          price={item.price}  
                          id={item._id}
                          inCart={item.inCart} />
                          // </Link>
                           )) : ""
              }
          </div>
        </section>
      </div>
        // <div className='wrapper'>
        //     <div className='heading'>
        //         <h1>found {data?.length} result for <mark>{category}</mark></h1>
        //     </div>
        //     <div className='content'>
                // {
                //     data ? data?.map(item => (
                //         <Link to={`/view?&id=${item.id}`}>
                //             <Card className='m-card'
                //                 hoverable
                //                 style={{
                //                     width: 340,
                //                 }}
                //                 cover={<img alt="example" src={img} />}
                //             >
                //                 <Meta title={title} description={`Price: $${price}`} />
                //                 {
                //                     state == false 
                //                     ? 
                //                 <button className='card-button' onClick={addToCart}>add to cart</button>
                //                     : 
                //                     <Link to="/cart"><button  className='card-button'>Go to Cart</button></Link>
                //                 }
                //             </Card>
                //         </Link>
                //     )) : ""
                // }
        //     </div>
        // </div>
    )
}

export default ByCategory