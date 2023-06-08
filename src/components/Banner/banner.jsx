import acceuil from '../../assets/acceuil.png';

function Banner(){
    return(
        <div className='home_banner'>
            <h2 className='home_img-text'>Chez vous, partout et ailleurs</h2>
            <img src={acceuil} alt='falaise bord de mer' className='home_img'/>
        </div>  
    )
}

export default Banner