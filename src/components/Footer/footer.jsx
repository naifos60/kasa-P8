import logo from '../../assets/footer.png';

function Footer(){
    return(
    <div className="footer">
        <img src={logo} alt='logo de kasa' className='footer_logo' />
        <p>© 2020 Kasa. All rights reserved</p>
    </div>
    )
}

export default Footer