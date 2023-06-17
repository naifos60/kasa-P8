function Title({id, title, location}){
    return(
        <div key={id} className="loc_info">
                <h1 className="loc_info-title">{title}</h1>
                <p className="loc_info-location">{location}</p>       
        </div>
    )
}

export default Title