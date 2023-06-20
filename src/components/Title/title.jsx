import PropTypes from 'prop-types';

function Title({title, location}){
    return(
        <div className='loc_info-title-and-location'>
            <h1 className="loc_info-title">{title}</h1>
            <p className="loc_info-location">{location}</p>       
        </div>
    )
}

Title.propTypes = {
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
}
export default Title