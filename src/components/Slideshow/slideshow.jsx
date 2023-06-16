function Slideshow({img}){
    return(
    <div className="slideshow">
        <img src={img} className="slideshow_image"  alt='vue loc'/>
        <div className="dot"></div>
    </div>
    )
}

export default Slideshow