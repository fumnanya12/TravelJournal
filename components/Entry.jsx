export default function Entry(props) {
    //console.log(props)

    return (
        <article className="journal-entry">
            <div className="image-container">
            <img className="main-image" src={props.img.src} alt={props.img.alt} />  
            </div>
        <main className="entry">
            <img  className="marker"  src="../images/marker.png" alt="marker icon" />
            <span>{props.country}</span>
            <a href={props.googlemapsLink}>
             view on Google Maps</a>
            <h2 className="entry-title">{props.title}</h2>
            <p className="trip-dates">{props.dates}</p>
            <p  className="entry-text">{props.text}</p>
        </main>
        </article>
    )
}   