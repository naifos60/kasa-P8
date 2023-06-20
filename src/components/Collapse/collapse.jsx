import { useState } from "react";
import dropUp from "../../assets/dropUP.png";
import PropTypes from 'prop-types';

function Collapse({title, content}){
    const [open, setOpen] = useState(false); 

    const handleToggle = () => {
        setOpen(!open);
    }

    return(
        <div className={`collapse ${open && 'active'}`}>
            <div className="collapse_title" onClick={handleToggle}>
                <h4>{title}</h4>
                <img src= {dropUp} alt="fleche d'ouverture" className={`collapse_icon ${open && "active"}`}  />
             </div>
            <div className={`collapse_content ${open && "active"}`}>
                <p className={`collapse_content-text ${open && "active"}`}>{content}</p>
            </div> 
        </div>      
    )
}

Collapse.propsTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
}

export default Collapse
