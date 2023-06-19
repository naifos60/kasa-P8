function Host({profile, name}){
    return(
        <div className="loc_info-host">
            <p className="loc_info-host-name">{name}</p>
            <img src={profile} className="loc_info-host-img" alt="visage du profile" />
        </div>
    )
}

export default Host