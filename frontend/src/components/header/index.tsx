import {BiSearchAlt} from "react-icons/bi"
import { HeaderStyle } from "./style"
import { useNavigate } from "react-router-dom";

export const Header = () => {

  const navigate = useNavigate();

    return (
        <HeaderStyle>
            <span onClick={() => {navigate("/")}}>Dinner Express</span>
            <div className="menu">
                <button>Categorias</button>
                <button>Login</button>
                <button>Cadastrar</button>
                <div className="input-place">
                    {/* <input type="text" placeholder="Buscar horários"/> */}
                    <button onClick={() => {
                        navigate("/isopen")}}>Buscar horários</button>
                    <BiSearchAlt/>
                </div>
            </div>
        </HeaderStyle>
    )
}