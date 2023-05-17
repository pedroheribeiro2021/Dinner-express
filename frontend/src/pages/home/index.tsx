import cover from "../../assets/dinner wallpapaer.jpg"
import { Header } from "../../components/header"
import { HomeStyle } from "./style"

export const Home = () => {

    return (
        <>
        <Header/>
        <HomeStyle>
            <h1>LUGARES INCRIVEIS!</h1>
            <h3 className="subtitle1">Seja bem vindo ao Food Express!
                Seu portal de restaurantes mais completo da internet.
            </h3>
            <h2>DINNER EXPRESS</h2>
            <h3 className="subtitle2">Lanchonetes, restaurantes, sorveterias e muito mais para matar sua fome.</h3>
            <div className="restaurants-hub">
                <img className="cover" src={cover} alt="" />

                <ul>
                    <li>
                        <h4>nome restaurante</h4>
                        <p>Categoria do restaurante</p>
                        <h5>Horário de funcionamento:</h5>
                        <span>
                        Aberto ⋅ Fecha às 15:30 ⋅ Reabre às 18:00
                        </span>
                        <div className="card-buttons">
                            <button>Verificar Horários</button>
                            <button>Entrar em contato</button>
                        </div>
                    </li>
                    <li>
                        <h4>nome restaurante</h4>
                        <p>Categoria do restaurante</p>
                        <h5>Horário de funcionamento:</h5>
                        <span>
                        Aberto ⋅ Fecha às 15:30 ⋅ Reabre às 18:00
                        </span>
                        <div className="card-buttons">
                            <button>Verificar Horários</button>
                            <button>Entrar em contato</button>
                        </div>
                    </li>
                </ul>
            </div>
        </HomeStyle>
        </>
    )
}