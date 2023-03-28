import Botao from '../Botao'
import './index.css'

const Hero = (props) => {
    if (props.reverse === true && window.screen.width > 425) {
        return (
            <div className="hero">
                <div className="text">
                    { props.children }
                </div>
                <div className="img">
                    <img src={ props.img } alt=""/>
                </div>
            </div>
        )
    } else {
        return (
            <div className="hero">
                <div className="img">
                    <img src={ props.img } alt=""/>
                </div>
                <div className="text">
                    { props.children }
                </div>
            </div>
        )
    }
}

export default Hero