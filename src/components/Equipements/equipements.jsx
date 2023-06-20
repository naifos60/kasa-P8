import {PropTypes} from 'prop-types';

function Equipements({equipement}){
    return(
            equipement.map((e,index) => (
                <li key={`${e}-${index}`} className="equipement">{e}</li>
        ))
    )
}

Equipements.propsTypes = {
    text: PropTypes.array.isRequired,
}

export default Equipements