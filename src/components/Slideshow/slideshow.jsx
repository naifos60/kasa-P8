import Arrow from "../Arrow/arrow.jsx";
import {useState} from 'react'

function Slideshow({img}){
    let [pics, setPics] = useState(0);
    const picture = img;
    const test = (nextPics) => {setPics(nextPics(pics))};
    const len = picture.length;

    function resetSlide(){
        if(pics === len){
            pics = 0;
        }else if(pics < 0){
            pics = len - 1;
        }
        return pics
    }
    
    return(   
    <div className="slideshow">
        <img src={picture[resetSlide()]} className="slideshow_image"  alt='vue loc'/>
        {`${len}` > 1 &&
            <div>
                <Arrow test={test}/>
                <div className="dot"><p>{(pics + 1)} / {(picture.length)}</p></div> 
            </div>}
    </div>
    )
}

export default Slideshow