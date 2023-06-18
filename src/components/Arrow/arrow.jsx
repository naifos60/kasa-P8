import arrowLeft from '../../assets/arrowLeft.png';
import arrowRight from '../../assets/arrowRight.png';
   
function Arrow({test}){
    const nextPics = (index) => index +1;
    const prevPics = (index) => index -1;
    return(
        <div className="arrow">
            <img className="arrow_right" src={arrowRight} alt="" onClick={() => test(nextPics)} />
            <img className="arrow_left" src={arrowLeft} alt="" onClick={() => test(prevPics)} />
        </div>
    )
}

export default Arrow