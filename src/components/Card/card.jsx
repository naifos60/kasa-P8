import PropTypes from 'prop-types'

function Card(id, cover, title){
    return(
            <div key={id} className="card">
                <img src={cover} alt=' vue de la location' className='card_img'/>
                <h4 className="card_title">{title}</h4>
            </div>
)} 

Card.propTypes = {
    id: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default Card