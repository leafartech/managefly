import './index.css'

const Footer = () => {
    return (
        <footer>
            <div className="acoes">
                <ul>
                    <li>Mais sobre managefly</li>
                    <li>
                        <a href="https://leafartech.com">Início</a>
                    </li>
                    <li>
                        <a href="https://leafartech.com">Criar conta</a>
                    </li>
                    <li>
                        <a href="https://leafartech.com">Entrar em contato</a>
                    </li>
                    <li>
                        <a href="https://leafartech.com">Política de privacidade</a>
                    </li>
                    <li>
                        <a href="https://leafartech.com">Termos de uso</a>
                    </li>
                </ul>
            </div>
            <div className="rights">
                <img src="./images/logo2.png" alt="" />
                <p>Todos os direitos reservados</p>
            </div>
        </footer>
    )
}

export default Footer