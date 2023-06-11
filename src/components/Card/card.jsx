import PropTypes from 'prop-types'

function Card({cover, title}){
    return(
            <div className="card">
                <img src={cover} alt=' vue de la location' className='card_img'/>
                <h4 className="card_title">{title}</h4>
            </div>
)} 

Card.propTypes = {
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default Card