import React from 'react'
import { NavLink } from 'react-router-dom';

const mystyle={
    width:"200px",
    height:"200px"
}
const mypara={
    width:"200px",
    height:"auto"
}
const mystyle1={
   display:"flex"
}

const Card1= (props) => {
    const { imgUrl, title, description, articleid } = props;
    return (
        <NavLink state={{ title: title, img: imgUrl, description: description, id: articleid }} to={`article/${articleid}`}>
            <div  className={articleid}>
                <div  style={mystyle1} className="card1" >
                    <div className='card1-img'>
                        <img style={mystyle} src={imgUrl} alt="not found" />
                    </div>
                    <div className='home__bigcard__data'  >
                        <h3 >{title}</h3>
                        <p style={mypara}>{description}....</p>
                    </div>
                </div>
            </div></NavLink>
    )

}

export default Card1;