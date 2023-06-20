import Arrow from "../Arrow/arrow.jsx"
import {useState} from 'react'
import {PropTypes} from 'prop-types'

function Slideshow({img}){
    let [pics, setPics] = useState(0);
    const picture = img;
    const len = picture.length;
    const handleNextPicture = () => {setPics(pics + 1)}
    const handlePreviousPicture = () => {setPics(pics -1)}
    const resetSlide = () => {if(pics === len){pics = 0;}else if(pics < 0){pics = len - 1;}return pics}
    
    return(   
    <div className="slideshow">
        <img src={picture[resetSlide()]} className="slideshow_image"  alt='vue loc'/>
        {`${len}` > 1 &&
            <div>
                <Arrow handleNext={handleNextPicture} handlePrevious={handlePreviousPicture}/>
                <div className="dot"><p>{(pics + 1)} / {(picture.length)}</p></div> 
            </div>}
    </div>
    )
}

Slideshow.propTypes = {
    img: PropTypes.array.isRequired,
}

export default Slideshow