import logo from '../../assets/logo.png'
import {NavLink} from 'react-router-dom'


function Header(){
    return (
    <div className='header'>
        <NavLink to={'/'}><img src={logo} alt='logo de kasa' className='header-img' /></NavLink>
        <nav>
            <NavLink to="/" className='header-nav'>Accueil</NavLink>
            <NavLink to="/propos" className='header-nav'>À Propos</NavLink>
        </nav>
    </div>
    )
}

export default Header