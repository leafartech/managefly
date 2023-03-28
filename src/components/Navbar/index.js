import './index.css'
import Botao from '../Botao'

const Navbar = () => {
    // hamburguer.onclick = () => {
    //     // menu.classList.add('active')
    // }
    let active = 0
    function activeMenu() {
        let menu = document.querySelector('.menu')
        let hamburguer = document.querySelector('.hamburguer')
        if (active) {
            hamburguer.classList.remove('active')
            menu.classList.remove('active')
            active --
        } else {
            hamburguer.classList.add('active')
            menu.classList.add('active')
            active ++
        }
    }

    return (
        <div className="navbar">
                <img className="logo" src="./images/logo.png" alt="Logo Managefly"/>
                <div className="hamburguer" onClick={ activeMenu }>
                    <div className="hamb-1"></div>
                    <div className="hamb-2"></div>
                    <div className="hamb-3"></div>
                </div>
                <nav>
                    <ul className="menu">
                        <li>
                            <a href="https://leafartech.com" className="active">Início</a>
                        </li>
                        <li>
                            <a href="https://leafartech.com">Blog</a>
                        </li>
                        <li className="mobile">
                            <Botao texto="Criar conta gratuita" />
                        </li>

                    </ul>
                </nav>

                <Botao texto="Criar conta gratuita" />
            </div>
    )
}

export default Navbar