import logo from '../../assets/logo.png'
import {Link} from 'react-router-dom'

function Header(){
    return (
    <div className='header'>
        <Link to={'/'}><img src={logo} alt='logo de kasa' className='header-img' /></Link>
        <nav >
            <Link to="/" className='header-nav'>Accueil</Link>
            <Link to="/propos" className='header-nav'>À Propos</Link>
        </nav>
    </div>
    )
}

export default Header