import PropTypes from 'prop-types';
import rectangle from '../../assets/Rectangle 2.png';
import {Link} from 'react-router-dom';


function Card({id, cover, title}){
    return(
        <Link to={`/fiches/${id}`}reloadDocument>
            <div className="card">
                <img src={cover} alt=' vue de la location' className='card_img'/>
                <h4 className="card_title">{title}</h4>
            </div>
        </Link>
)} 

Card.propTypes = {
    id   : PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

Card.defaultProps = {
    cover: rectangle,
    title: 'Titre de la location',
}

export default Card