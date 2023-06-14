import { useState } from "react";
import dropUp from "../../assets/dropUP.png";
import dropDown from "../../assets/dropDown.png";

function Collapse({title, content}){
    const [open, setOpen] = useState(false); 

    const handleToggle = () => {
        setOpen(!open);
    }

    return(
        <div className={`collapse ${open && 'active'}`}>
            <div className="collapse_title">
                <h4>{title}</h4>
                <button><img src= {`${open ? dropDown : dropUp}`} alt="fleche d'ouverture" className="collapse_icon" onClick={handleToggle} /></button>
             </div>
            <div className={`collapse_content ${open && "active"}`}>
                <p className={`collapse_content-text ${open && "active"}`}>{content}</p>
            </div> 
        </div>
            
    )
}

export default Collapse
