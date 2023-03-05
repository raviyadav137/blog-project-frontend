import React from "react";
import { NavLink,Link} from "react-router-dom";

const mystyle={
    width:"280px",
    height:"300px"
}
const mypara={
    width:"220px",
    height:"auto",
    overflow:"hidden"
}
const Card = (props) => {
    const { imgUrl, title, description, techId } = props;
    return (
        <Link to="/PageDetail">
        <NavLink 
            state={{
                title: title,img: imgUrl,description: description,id: techId,}} to={`${techId}`}>
            
                <div className="card-box">
                    <div className="card-image">
                        <img style={mystyle} src={imgUrl} alt="{not found}" />
                    </div>
                    <div className="carddata">
                        <h4>{title}</h4>
                        <p style={mypara}>{description}....</p>
                    </div>
                    </div>
               {/* <hr style={{width:"620px", fontWeigth: "38px", color: "black" }} />*/}
            
        </NavLink>
       </Link>
    );
};

export default Card;