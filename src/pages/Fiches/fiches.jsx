import Slideshow from "../../components/Slideshow/slideshow.jsx";
import Tags from "../../components/Tags/tags.jsx";
import Collapse from "../../components/Collapse/collapse.jsx";
import data from '../../data/logements.jsx';

function Fiches(){
    const dat = data.filter(e => e === data[0]);
    return(
        <div className="fiche">
            {dat.map((loc) => (
                <Slideshow key={loc.id} img={loc.pictures[0]} />
            
            ))}  
            {dat.map((loc) =>(
                <div key={loc.id} className="loc_info">
                    <h1 className="loc_info-title">{loc.title}</h1>
                    <p className="loc_info-location">{loc.location}</p>       
                </div>
            ))}
            {dat.map((loc) => (
                <div key={loc.id} className="loc_info-tags">
                    <Tags text={loc.tags[0]}/>
                    <Tags text={loc.tags[1]} />
                </div>
            ))}
            {dat.map((loc) => (
                <div key={loc.id} className="loc_info-collapse">
                    <Collapse  title="Description" content={loc.description}/>
                    <Collapse title="Équipements" content={loc.equipments} />
                </div>
            ))}  
        </div>
    )
}

export default Fiches