import error from '../../assets/404.png';

function Error(){
    return(
        <div className='error'>
            <img src={error} alt="404 erreur" className='error_img' />
            <p className='error_msg'>Oups! La page que vous demandez n'existe pas.</p>
            <a href='/' className='return_link'>Retourner sur la page d’accueil</a>
        </div>
    )
}

export default Error