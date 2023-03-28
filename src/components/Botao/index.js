import './index.css'

function Botao(props) {
    return (
        <button className="botao" href="https://leafartech.com">
            { props.texto }
        </button>
    )
}

export default Botao