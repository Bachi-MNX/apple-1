import axios from 'axios'
import React from 'react'
import queryString from 'query-string'
import { useLocation } from 'react-router-dom'
import Product from './Product'

function Searchpage() {
    const [data, setData] = React.useState([])

    const location = useLocation()

    const { key } = queryString.parse(location.search)

    const search = async () => {
        const { data } = await axios.get('http://localhost:5002/getProducts')
        if (data) {
            var items = []
            data.map(item => item.title.toLowerCase().includes(key.toLowerCase()) ? items.push(item) : "")
            setData(items)
        }
    }

    React.useEffect(() => {
        search()
    }, [key])

    return (
                <div className='page'>
                <section className=' container'>
                <h1>found {data?.length} result for <mark>{key}</mark></h1>
                <div className='row gap-4 '>
                {
                    data ? data?.map(item => (
                        // <Link className='link' to={`/view?&id=${item.id}`}>
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
    )
}

export default Searchpage