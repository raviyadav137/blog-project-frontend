import React from 'react'
import {Link} from 'react-router-dom'
function Nav(){
    return (
  <div className="Nav">
    <ul className="ul">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/bolly"> Bollywood</Link></li>
        <li><Link to="/tech">Technology</Link></li>
        <li><Link to="/holly">Hollywood</Link></li>
        <li><Link to="/fit">Fitness</Link></li>
        <li><Link to="/food">Food</Link></li>
    </ul>
  </div>
    )
}
export default Nav