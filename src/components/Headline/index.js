import './index.css'

const Headline = (props) => {
    return (
        <div className="headline">
            <h3>{ props.top }</h3>
            <h2>{ props.main }</h2>
            <p className="subtitle">{ props.sub }</p>
        </div>
    )
}

export default Headline