import PropTypes from 'prop-types';
import rectangle from '../../assets/Rectangle 2.png';
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';

function Card({cover, title}){
    const {numberLogements} = useParams();
    return(
        <Link to={`/fiches/${numberLogements}`}>
            <div className="card">
                <img src={cover} alt=' vue de la location' className='card_img'/>
                <h4 className="card_title">{title}</h4>
            </div>
        </Link>
)} 

Card.propTypes = {
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

Card.defaultProps = {
    cover: rectangle,
    title: 'Titre de la location',
}

export default Card