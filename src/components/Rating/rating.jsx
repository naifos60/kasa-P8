import PropTypes from 'prop-types';
import starColor from '../../assets/starColor.png';
import starUnColor from '../../assets/starUnColor.png';


function Rating({note}){
    const n = parseInt(note)
    const end = (n - 1);
    const ratings = [starUnColor,starUnColor,starUnColor,starUnColor,starUnColor];
    const t = ratings.fill(starColor, 0, end);
    return(
        <div className="loc_info-ratings-rating">
            {t.map((rate,index) => (
               <img key={`${rate}-${index}`} src={rate} alt="star" className='loc_info-ratings-rating-img'/>
            ))}   
        </div>
    )
}

Rating.propsTypes = {
    note: PropTypes.string.isRequired,
}

export default Rating