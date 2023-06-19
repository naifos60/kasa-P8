import Slideshow from "../../components/Slideshow/slideshow.jsx";
import Tags from "../../components/Tags/tags.jsx";
import Collapse from "../../components/Collapse/collapse.jsx";
import Title from "../../components/Title/title.jsx";
import data from '../../data/logements.jsx';
import {useParams, useNavigate} from 'react-router-dom';
import {useEffect} from 'react';



function Fiches(){
    const {idLogements} = useParams();
    const logement = (e) => e.id === idLogements;
    const test = data.findIndex(logement);
    const dat = data.filter(e => e === data[test]);
    const navigate = useNavigate();
  
  
    useEffect(() => {
    if(!data.some(t => t.id === idLogements)){
        navigate("/error");
        }
    });
    return(
        <section>
            {dat.map((loc) => (
                <div key={loc.id} className="fiche"  >
                    <Slideshow  img={loc.pictures} />
                    <div className="loc_info">
                        <Title title={loc.title} location={loc.location} />
                        <div className="loc_info-tags">
                            {loc.tags.map((tags) => (
                            <Tags key={`${loc.id}-${tags}`} text={tags}/>
                            ))}
                        </div>
                        <div className="loc_info-collapse">
                            <Collapse title="Description" content={loc.description}/>
                            <Collapse title="Équipements" content={loc.equipments} className='collapse_equipements' />
                        </div>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Fiches