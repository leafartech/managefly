import { useState } from 'react'
import Descricao from '../Descricao'
import './index.css'

const Funcionalidades = () => {

    const descricao = [
        {
            icone: './images/item/4.png',
            titulo: 'Gestão de projetos',
            texto: [
                'Mantenha todos os seus projetos em andamento organizados da melhor forma possível.', 
                'Com uma interface intuitiva, moderna e fácil de usar, você pode criar novos projetos, novas tarefas, atualizar o  status do projeto, fazer observações e muito mais.',
                'Nunca foi tão fácil ter controle total dos seus projeto.'
            ],
            imagem: './images/hero2.png'
        },
        {
            icone: './images/item/5.png',
            titulo: 'Gestão de tarefas',
            texto: [
                'Tenha controle total sobre seu fluxo de trabalho e aumente sua produtividade..', 
                'Nosso software de gestão de tarefas permite que você priorize suas atividades, acompanhe o progresso e receba lembretes automáticos. Simplifique seu dia a dia e alcance seus objetivos com mais rapidez.',
            ],
            imagem: './images/hero5.png'
        },
        {
            icone: './images/item/6.png',
            titulo: 'Gestão de clientes',
            texto: [
                'Personalize suas interações e aumente sua fidelidade.', 
                'Conheça seus clientes como nunca antes e crie relacionamentos duradouros. Com nosso sistema de gestão de clientes, você pode centralizar todas as informações relevantes em um só lugar, incluindo histórico de compras, preferências e contatos.',
            ],
            imagem: './images/hero2.png'
        },
        {
            icone: './images/item/7.png',
            titulo: 'Gestão financeira',
            texto: [
                'Gerenciar suas finanças pode ser um desafio, mas com as ferramentas certas, você pode controlar seu dinheiro de maneira mais eficiente e alcançar seus objetivos financeiros.', 
                'Com nossa plataforma de gestão financeira, você pode monitorar suas despesas, planejar seu orçamento e investir com mais inteligência.',
            ],
            imagem: './images/hero5.png'
        },
    ]

    const [ showElement, setShow ] = useState(descricao[0])

    let clickedElement = undefined
    function Update(event) {
        let listItems = document.querySelectorAll('.list-item')
        let arr = []
        listItems.forEach(item => {
            item.classList.remove('actived')
            arr.push(item)
        })
        event.target.classList.add('actived')
        let position = arr.indexOf(event.target)
        setShow(descricao[position])
    }

    return (
        <div className="funcionalidades">
            <nav>
                <ul>
                    <li className="list-item actived" onClick={ event => Update(event) }>
                        Projetos
                    </li>
                    <li className="list-item" onClick={ event => Update(event) }>
                        Tarefas
                    </li>
                    <li className="list-item" onClick={ event => Update(event) }>
                        Clientes
                    </li>
                    <li className="list-item" onClick={ event => Update(event) }>
                        Finanças
                    </li>
                </ul>
            </nav>
            <div className="content">
                    <Descricao 
                        elemento={ clickedElement }
                        items={ showElement }
                    />
            </div>
        </div>
    )
}

export default Funcionalidades