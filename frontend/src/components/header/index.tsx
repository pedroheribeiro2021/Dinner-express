import {BiSearchAlt} from "react-icons/bi"
import { HeaderStyle } from "./style"

export const Header = () => {

    return (
        <HeaderStyle>
            <span>Dinner Express</span>
            <div className="menu">
                <button>Categorias</button>
                <button>Login</button>
                <button>Cadastrar</button>
                <div className="input-place">
                    <input type="text" placeholder="Buscar horários"/>
                    <BiSearchAlt/>
                </div>
            </div>
        </HeaderStyle>
    )
}