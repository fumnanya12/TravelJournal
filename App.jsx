import Header from "./components/Header.jsx"
import Entry from "./components/Entry.jsx"
import data from "./data.js"
export default function App() {
    const entrydata=data.map((item)=>
    { //return <Entry key={item.id} image={item.img} title={item.title} country={item.country} googlemapsLink={item.googleMapsLink} dates={item.dates} text={item.text} />
        return(
            <Entry
            key={item.id}
            {...item}
            />
        )
    })


    return (
        <>
        <Header />
        <main className="container">
        {entrydata}
      
        </main>
        </>
    )
}