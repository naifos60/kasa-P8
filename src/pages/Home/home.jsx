import Banner from '../../components/Banner/banner';
import Card from '../../components/Card/card';
import Logements from '../../data/logements';
import acceuil from '../../assets/acceuil.png';

function Home() {
const locations = [Logements];
  return (
    <div className="home">
        <Banner
        cover = {acceuil}
        text = "Chez vous, partout et ailleurs" />
        <div className="home_card-container">
        {locations.map((loc) => (
          <Card 
          key= {loc.id}
          cover= {loc.cover}
          title= {loc.title}
          />
        ))}
        </div>
    </div>
    ) 
  }
    


export default Home;
