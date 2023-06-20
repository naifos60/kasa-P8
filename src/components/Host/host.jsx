import PropTypes from 'prop-types';

function Host({profile, name}){
    return(
        <div className="loc_info-host">
            <p className="loc_info-host-name">{name}</p>
            <img src={profile} className="loc_info-host-img" alt="visage du profile" />
        </div>
    )
}

Host.propsTypes = {
    profile: PropTypes.string,
    name: PropTypes.string.isRequired,
}

export default Host