import Banner from '../../components/Banner/banner';
import Card from '../../components/Card/card';
import acceuil from '../../assets/acceuil.png';
import data from '../../data/logement.json';

function Home() {
  return (
    <div className="home">
        <Banner cover = {acceuil} text = "Chez vous, partout et ailleurs" /> 
        <div className="home_card-container">
            {data.map ((loc) => (
                <Card
                key={loc.id}
                id={loc.id}
                cover={loc.cover}
                title={loc.title} />
              ))}
        </div>
    </div>
    ) 
  }
    
export default Home;