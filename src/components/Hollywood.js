import React, { useState,useEffect } from 'react'
import Nav from './Nav'
import Header from './Header'
//import { store } from './Details'
import Card from './Card'
import Card2 from './Card2';

const Hollywood = () => {
    //const [detail] = useContext(store);
    const [value,setValue]=useState([]);
    console.log(value);
    useEffect(()=>{
        const url="http://localhost:4000/holly"
        fetch(url).then(res=>res.json())
            .then(res => setValue(res))
     },[])
    return (
        <div>
            <Header/>
            <Nav/>
            <h1 style={{ margin: "18px 10%", display: "inline-block" }}>
                Hollywood
                </h1>
            <h1 style={{ margin: "60px 0px 0px 45.5%", display: "inline-block" }}>
                Top Posts
                </h1>
            <div className="main-container">
                <div className='main1'>
                    {
                      value.map((item) => (
                            <Card
                                key={item.id}
                                articleid={item.id}
                                imgUrl={item.img}
                                title={item.title}
                                description={item.description.slice(0, 150)}
                            />
                        ))
                    }

                </div>

                <div className="main2">
                    {
                value.map((item) => (
                            <Card2
                                key={item.id}
                                articleid={item.id}
                                imgUrl={item.img}
                                description={item.description.slice(0, 150)}
                                title={item.title.slice(0, 25)}
                            />
                        ))
                    }
                    <div className='ad'>
                        <p>Advertisement</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hollywood;