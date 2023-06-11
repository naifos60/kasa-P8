import Banner from '../../components/Banner/banner';
import Card from '../../components/Card/card';
import Logements from '../../data/logements';



function Home() {
const locations = [Logements];
  return (
    <div className="home">
        <Banner />
        <div className="home_card-container">
        {locations.map((location) => (
          <Card 
          key= {location.id}
          id = {location.id}
          cover= {location.cover}
          title= {location.title}
          />
        ))}
        </div>
    </div>
    ) 
  }
    


export default Home;
