function CardUser({ image, name }) {
    return (
        <div 
            className="card-user" 
            style={ { 
                backgroundImage: `url(${image})`, 
                backgroundPosition: 'center', 
                backgroundRepeat: 'no-repeat', 
            } }>
            <div>
                <h2>{name}</h2>
            </div>
        </div>
    )
}

export default CardUser