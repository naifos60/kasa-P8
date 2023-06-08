import logo from '../../assets/logo.png'
import {Link} from 'react-router-dom'

function Header(){
    return (
    <div className='header'>
        <a href='/'><img src={logo} alt='logo de kasa' className='header-img' /></a>
        <nav >
            <Link to="/" className='header-nav'>Acceuil</Link>
            <Link to="/propos" className='header-nav'>À Propos</Link>
        </nav>
    </div>
    )
}

export default Header