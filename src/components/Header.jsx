import slytherin from "../assets/slytherin.png"

export default function Header() {
    return (
        <header className="header">
            <img 
                src={slytherin}
                className="header--image"
            />
            <h2 className="header--title">Legacy Memes</h2>
            <h4 className="header--project">Where magic meets memes</h4>
        </header>
    )
}