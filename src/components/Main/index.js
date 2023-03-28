import Botao from '../Botao'
import Funcionalidades from '../Funcionalidades'
import Headline from '../Headline'
import Hero from '../Hero'
import Preco from '../Preco'
import './index.css'


const Main = () => {
    return (
        <main>
            <section>
                <div className="content">
                    <Headline 
                    top="Plataforma completa" 
                    main="Já pensou em gerenciar tudo em um só lugar?" 
                    sub="A managefly é um sistema desenvolvido e otimizado para tornar a gestão de qualquer negócio mais fácil"
                    />
                    <Hero reverse={ false } img="./images/hero.png">
                        <ul>
                            <li>
                                <img className="sm-img" src="./images/item/1.png" alt=""/>
                                <div>
                                    <h3>Crie sua conta gratuita</h3>
                                    <p className="subtitle">Oferecemos 14 dias para você testar e se apaixonar pela plataforma. Ah, e pode ficar tranquilo, não precisa do cartão de crédito!</p>
                                </div>
                            </li>
                            <li>
                                <img className="sm-img" src="./images/item/2.png" alt=""/>
                                <div>
                                    <h3>Gerencie o seu tempo</h3>
                                    <p className="subtitle">Saiba exatamente as tarefas que precisam ser feitas e até qual data para conseguir maximizar a sua produtivdade.</p>
                                </div>
                            </li>
                            <li>
                                <img className="sm-img" src="./images/item/3.png" alt=""/>
                                <div>
                                    <h3>Fique encantado</h3>
                                    <p className="subtitle">Temos certeza que após testar a nossa plataforma pela primeira vez você não vai conseguir viver mais sem ela!</p>
                                </div>
                            </li>
                        </ul>
                        <Botao texto="Criar conta gratuita"/>

                    </Hero>
                </div>
            </section>
             <section className="mt">
                <div className="content">
                    <Headline
                    top="Funcionalidades principais"
                    main="Organização nunca mais será um problema"
                    sub="A managefly é um sistema desenvolvido e otimizado para tornar a gestão de qualquer negócio mais fácil"
                    />
                </div>
                <Funcionalidades />
            </section>
            <section className="">
                <div className="content">
                    <Hero reverse={ true } img="./images/hero3.png">
                        <div className="lasts">
                            <h3>Otimização</h3>
                            <h2>Aumente a produtividade da sua equipe</h2>
                            <p className="subtitle">Além disso nossas ferramentas colaborativas, você pode manter todos os membros da equipe alinhados e trabalhando juntos de forma eficiente.</p>
                            <div>
                                <p className="subtitle">Gestão completa de projetos</p>
                                <p className="subtitle">Delegue tarefas para funcionários</p>
                                <p className="subtitle">Centralize a gestão dos seus projetos</p>
                            </div>
                        </div>
                        <Botao texto="Criar conta gratuita" />
                    </Hero>
                </div>
            </section>
            <section>
                <div className="content">
                    <Hero reverse={ false } img="./images/hero4.png">
                        <div className="lasts">
                            <h3>Planeje, inicie e conclua</h3>
                            <h2>Nunca foi tão fácil gerir um projeto</h2>
                            <ul>
                                <li>
                                    <img src="images/check.png" alt=""/>
                                    <p className="subtitle">
                                    Faça o planejamento completo do seu projeto: defina o objetivo, datas, tarefas, orçamento, aribua a um cliente...
                                    </p>
                                </li>
                                <li>
                                    <img src="images/check.png" alt=""/>
                                    <p className="subtitle">
                                    Inicie o projeto, crie e delegue tarefas aos seus funcionários, defina prazos e faça atualizações
                                    </p>
                                </li>
                                <li>
                                    <img src="images/check.png" alt=""/>
                                    <p className="subtitle">
                                    Finalize o projeto dentro do prazo, confira a produtividade da equipe e veja se foi um sucesso
                                    </p>
                                </li>
                            </ul>
                            <Botao texto="Criar conta gratuita" />
                        </div>
                    </Hero>
                </div>
            </section>
            <section className="mt">
                <div className="content">
                    <Headline 
                        main="Planos"
                        sub="Se sentir necessidade de alguma configuração de plano específica, por favor, entre em contato com nosso suporte. Ficaremos felizes em te ajudar"
                    />
                    <Preco />
                </div>
            </section>
        </main>
        
    )
}

export default Main