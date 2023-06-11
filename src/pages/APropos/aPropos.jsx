import Banner from '../../components/Banner/banner';
import propos from '../../assets/propos.png';

function Propos(){
    return(
        <div className='propos'>
            <Banner
            cover= {propos} />   
        </div>
    )
}

export default Propos