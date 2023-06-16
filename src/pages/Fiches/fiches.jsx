import Slideshow from "../../components/Slideshow/slideshow.jsx";
import data from '../../data/logements.jsx';

function Fiches(){
    return(
        <div className="fiche">
            {data.map((loc) => (
                <Slideshow key={loc.id} img={loc.cover} />
            ))}      
        </div>
    )
}

export default Fiches