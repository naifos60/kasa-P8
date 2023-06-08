import Banner from '../../components/Banner/banner';
import Card from '../../components/Card/card';

function Home() {
  return (
    <div className="home">
        <Banner /> 
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
