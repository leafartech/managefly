import './index.css'

const Descricao = (props) => {
    console.log(props.items)
    return (
        <div className="f-div">
            <div className="text">
                <img src={ props.items.icone } alt=""/>
                <div>
                    <h3>{ props.items.titulo }</h3>
                    { props.items.texto.map(text => <p className="subtitle">{ text }</p>) }
                </div>
            </div>
            <img src={ props.items.imagem } alt=""/>
        </div>
    )
}

export default Descricao