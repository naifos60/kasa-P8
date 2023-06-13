function Banner({cover, text}){
    return(
        <div className='banner'>
            <h2 className='banner_img-text'>{text}</h2>
            <img src={cover} alt="vue d'un paysage" className='banner_img'></img>
        </div>  
    )
}

export default Banner