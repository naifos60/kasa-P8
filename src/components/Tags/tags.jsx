import PropTypes from 'prop-types';

function Tags({text}){
    return(
        <div className="tags">{text}</div>
    )
}

Tags.propsTypes = {
    text: PropTypes.array.isRequired,
}

export default Tags