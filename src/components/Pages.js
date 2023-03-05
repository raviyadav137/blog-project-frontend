import React from 'react'
import { useLocation } from 'react-router-dom'

const Pages = () => {
    const mystyle={
        textAlign:"center"
    }
   
    const location = useLocation();
    const { title, img, description } = location.state;
    console.log(title)
    return (
        <div className='page'>
            <h1 style={mystyle}>{title}</h1>
            <img className="myimage" src={img} alt="" />
            <p>{description}</p>
                  </div>
    )
}

export default Pages;