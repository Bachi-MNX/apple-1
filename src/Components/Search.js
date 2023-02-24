import axios from 'axios'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Search() {
    const [input, setInput] = React.useState('')
    const [data, setData] = React.useState([])

    const navigate = useNavigate()

    const search = async (event) => {
        const { data } = await axios.get('http://localhost:5002/getProducts')
        if (data) {
            var items = []
            data.map(item => item.title.toLowerCase().includes(input.toLowerCase()) ? items.push(item) : "")
            setData(items)
        }
    }
    const gotoS = (event) => {
        if (event.keyCode === 13 && input != "") {
            navigate(`/search?&key=${input}`)
            setInput("")
        }
    }
    React.useEffect(() => {
        if (input !== "") {
            search()
        } else {
            setData([])
        }
    }, [input])

    return (
        <div className='search-area'>
            <input value={input} onKeyDown={event => gotoS(event)} onInput={e => setInput(e.target.value)} type="search" />
            <div className='search-result' style={{ display: data != "" ? "block" : "none" }}>
                {
                    data ? data?.map(item => (
                        <div key={item._id} className='card1'>
                            <Link className='link' to={`/view?&id=${item._id}`}><h5 onClick={() => setData([])} className='mini-result'>{item.title}</h5></Link>
                        </div>)) : ""
                }
            </div>
            <i class="bi bi-search"></i>
        </div>
    )
}

export default Search