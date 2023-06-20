import arrowLeft from '../../assets/arrowLeft.png';
import arrowRight from '../../assets/arrowRight.png';
import {PropTypes} from 'prop-types';
   
function Arrow({handleNext, handlePrevious}){

    return(
        <div className="arrow">
            <img className="arrow_right" src={arrowRight} alt="" onClick={() => handleNext()} />
            <img className="arrow_left" src={arrowLeft} alt="" onClick={() => handlePrevious()} />
        </div>
    )
}

Arrow.propTypes = {
    handleNext: PropTypes.func.isRequired,
    handlePrevious: PropTypes.func.isRequired,
}

export default Arrow