import React from 'react'
import { Link } from "react-router-dom"
import Pages from './Pages'
const PageDetail = () => {
       return (
        <div className='main'>
        <Pages/>
        <Link to="/"> <button className="mybutton" >Go Home</button> </Link>
        </div>
    )
}

export default PageDetail;