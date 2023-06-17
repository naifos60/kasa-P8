import Slideshow from "../../components/Slideshow/slideshow.jsx";
import Tags from "../../components/Tags/tags.jsx";
import Collapse from "../../components/Collapse/collapse.jsx";
import Title from "../../components/Title/title.jsx";
import data from '../../data/logements.jsx';
import arrowLeft from '../../assets/arrowLeft.png';
import arrowRight from '../../assets/arrowRight.png';
import {useState} from 'react';
import {useParams} from 'react-router-dom';

function Fiches(){
    const {idLogements} = useParams();
    const logement = (e) => e.id === idLogements;
    const test = data.findIndex(logement);
    const [pics, setPics] = useState(0)
    const dat = data.filter(e => e === data[test]);

    function nextPics(){
        setPics(pics + 1)
        }
    function prevPics(){
        setPics(pics -1)
    }
        
    return(
        <section>
            {dat.map((loc) => (
                <div key={loc.id} className="fiche"  >
                    <div className="arrow">
                        <img className="arrow_right" src={arrowRight} alt="" onClick={nextPics} />
                        <img className="arrow_left" src={arrowLeft} alt="" onClick={prevPics} />
                    </div>
                    <Slideshow  img={[loc.pictures[pics]]} />
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