import { Button, Drawer, Input } from 'antd';
import { useState } from 'react';
import axios from 'axios'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Menu = () => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const [input, setInput] = React.useState('')
    const [data, setData] = React.useState([])

    const navigate = useNavigate()

    const search = async (event) => {
        const { data } = await axios.get('https://apple-store-app.herokuapp.com/getProducts')
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


    const category = [
        {
          name: "iphone" //აქ წესით ამ სახელების მაგიერ აიდები უნდა ეწეროს მარა ესეც მუშაობს 
        },
        {
          name: "ipad"
        },
        {
          name: "Mac"
        },
        {
          name: "watch"
        },
        {
          name: "AirPods"
        },
      ]
    return (
        <>
            <div className='nav-hidden' onClick={showDrawer}>
                <i class="bi bi-list"></i>
            </div>
            <Drawer className='nav-hidden-menu' title="Basic Drawer" placement="right" onClose={onClose} open={open}>
                <Input value={input} onKeyDown={event => gotoS(event)} onInput={e => setInput(e.target.value)} type="search"  />
                {
             category.map(({ name }) => (
            <Link className='link2' to={`/category?&category=${name}`}><ul><li></li>{name}</ul></Link>
          ))
         }
            </Drawer>
        </>
    );
};
export default Menu;