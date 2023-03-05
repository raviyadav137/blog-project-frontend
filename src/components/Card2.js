import React from 'react'
import { Link } from 'react-router-dom'

const mystyle={
    width:"200px",
    height:"260px"
}

const Card2 = (props) => {
    const { imgUrl, title, description, articleid } = props;

    return (
        <Link state={{ title: title, img: imgUrl, description: description, id: articleid }} to={`article/${articleid}`}>
            <div className='card__small' >
                <div className="card__data" >
                    <div className="smallCard__image">
                        <img style={mystyle} src={imgUrl} alt="not found" />
                    </div>
                    <div className='small'  >
                        <h6>{title} ......</h6>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card2;