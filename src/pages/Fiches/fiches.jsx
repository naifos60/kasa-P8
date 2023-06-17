import Slideshow from "../../components/Slideshow/slideshow.jsx";
import Tags from "../../components/Tags/tags.jsx";
import Collapse from "../../components/Collapse/collapse.jsx";
import Title from "../../components/Title/title.jsx";
import data from '../../data/logements.jsx';
import {useState} from 'react';
import {useParams} from 'react-router-dom';

function Fiches(){
    const {idLogements} = useParams();
    const test = data.indexOf({idLogements});
    const [index, setIndex] = useState(0);
    const dat = data.filter(e => e === data[index]);

    function nextPics(){
        setIndex(index + 1)
        }
        
    return(
        <section>
            {dat.map((loc) => (
                <div key={loc.id} className="fiche" >
                    <Slideshow  img={[loc.pictures[index]]} onClick={nextPics}/>
                    <Title title={loc.title} location={loc.location} />
                    <div className="loc_info-tags">
                        {loc.tags.map((tags) => (
                            <Tags key={`${loc.id}-${tags}`} text={tags}/>
                        ))}
                    </div>
                    <div className="loc_info-collapse">
                        <Collapse title="Description" content={loc.description}/>
                        <Collapse title="Équipements" content={loc.equipments} />
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Fiches