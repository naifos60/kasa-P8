import Slideshow from "../../components/Slideshow/slideshow.jsx";
import Tags from "../../components/Tags/tags.jsx";
import Collapse from "../../components/Collapse/collapse.jsx";
import Title from "../../components/Title/title.jsx";
import Host from "../../components/Host/host.jsx";
import Rating from "../../components/Rating/rating.jsx";
import Equipements from "../../components/Equipements/equipements.jsx";
import data from '../../data/logement.json';
import {useParams, useNavigate} from 'react-router-dom';
import {useEffect} from 'react';


function Fiches(){
    const {id} = useParams();
    const logement = (e) => e.id === id;
    const test = data.findIndex(logement);
    const dat = data.filter(e => e === data[test]);
    const navigate = useNavigate();
  
  
    useEffect(() => {
    if(!data.some(t => t.id === id)){
        navigate("/error");
        }
    });
    return(
        <section>
            {dat.map((loc) => (
                <div key={loc.id} className="fiche">
                    <Slideshow  img={loc.pictures}/>
                    <div className="loc_info">
                        <Title title={loc.title} location={loc.location}/>
                        
                        <div className="loc_info-tags">
                            {loc.tags.map((tags) => (
                            <Tags key={`${loc.id}-${tags}`} text={tags}/>
                            ))}
                        </div>
                        <div className="loc_info-host-and-ratings">
                                <Host profile={loc.host.picture} name={loc.host.name}/>
                            <div className="loc_info-ratings">
                                <Rating note={loc.rating} />
                            </div>
                        </div>
                        <div className="loc_info-collapse">
                            <Collapse title="Description" content={loc.description}/>
                            <Collapse title="Équipements" content={<Equipements equipement={loc.equipments}/>}/>
                        </div>
                        
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Fiches