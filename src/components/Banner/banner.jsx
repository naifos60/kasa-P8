function Banner({cover, text}){
    return(
        <div className='home_banner'>
            <h2 className='home_img-text'>{text}</h2>
            <img src={cover} alt="vue d'un paysage" className='home_img'/>
        </div>  
    )
}

export default Banner