import PropTypes from 'prop-types'

function Banner({cover, text}){
    return(
        <div className='banner'>
            <h2 className='banner_img-text'>{text}</h2>
            <img src={cover} alt="vue d'un paysage" className='banner_img'></img>
        </div>  
    )
}

Banner.propTypes = {
    cover: PropTypes.string.isRequired,
    text: PropTypes.string,
}

export default Banner