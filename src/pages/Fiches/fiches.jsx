import Slider from "../../components/Slider/slider.jsx";
import acceuil from '../../assets/acceuil.png';

function Fiches(){
    return(
        <div className="fiche">
           <Slider img = {acceuil} text = "caroussel"/>
        </div>
    )
}

export default Fiches