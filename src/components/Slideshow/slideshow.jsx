import Arrow from "../Arrow/arrow.jsx";
import {useState} from 'react'

function Slideshow({img}){
    let [pics, setPics] = useState(0);
    const picture = img;
    const test = (nextPics) => {setPics(nextPics(pics))};
    return(
    <div className="slideshow">
        <img src={picture[pics]} className="slideshow_image"  alt='vue loc'/>
        <Arrow test={test}/>
        <div className="dot"></div>
    </div>
    )
}

export default Slideshow