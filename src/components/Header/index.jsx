import logo from '../../assets/logo.png'
import {Link} from 'react-router-dom'

function Header(){
    return (
    <div>
        <img src={logo} alt='logo de kasa' />
        <nav>
            <Link to="/">Acceuil</Link>
            <Link to="/propos">À Propos</Link>
        </nav>
    </div>
    )
}

export default Header