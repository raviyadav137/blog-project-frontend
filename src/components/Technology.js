import React, { useState,useEffect } from 'react'
//import { store } from './Details'
import Nav from './Nav'
import Header from './Header'
import Card from './Card'
import Card2 from './Card2';


export const Technology = () => {
    //const [details] = useContext(store);
    const[value,setValue]=useState([]);
    console.log(value);
    useEffect(()=>{
        const url="https://blogbackend-mgez.onrender.com/technology"
        fetch(url).then(res=>res.json())
            .then((res)=>setValue(res))
    })

   
    return (
        
        <div>
            <Header/>
            <Nav/>
           
         <h1 style={{margin: "20px 10%", display: "inline-block" }}>Technology</h1>
            <h1 style={{margin: "60px 0px 0px 40.5%", display: "inline-block"}}>Latest Posts</h1>

            <div className="main-container">
                <div className='rightbar'>
                    {
                      value.map((item) => (<Card

                            techId={item.id}
                            imgUrl={item.img}
                            description={item.description.slice(0, 150)}
                            title={item.title}

                        />))
                    }
                </div>
                <div className="sidebar">
                    {
                        value.map((item) => (
                            <Card2
                                articleid={item.id}
                                imgUrl={item.img}
                                description={item.description.slice(0, 150)}
                                title={item.title.slice(0, 25)}
                                author={item.author}
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

export default Technology