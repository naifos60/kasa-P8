import acceuil from '../../assets/acceuil.png';
import Card from '../../components/Card/card';

function Home() {
  return (
    <div className="home">
      <h2 className='home_img-text'>Chez vous, partout et ailleurs</h2>
      <img src={acceuil} alt='falaise bord de mer' className='home_img'/>     
    <div className="home_card-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
    
  );
}

export default Home;
