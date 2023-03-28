import './index.css'
import Navbar from '../Navbar'
import Texto from '../Texto'

function Header() {
    return (
        <header className="mana-head">
            <Navbar />
            <Texto />
            <img src="./images/mockup1.png" alt="" />
        </header>
    )
}

export default Header