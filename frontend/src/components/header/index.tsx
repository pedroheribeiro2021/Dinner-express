import {BiSearchAlt} from "react-icons/bi"
import { HeaderStyle } from "./style"
import { useNavigate } from "react-router-dom";
import { useModalContext } from "../../contexts/modalContext";

export const Header = () => {
    const { setCreateRestaurantModalOpen } = useModalContext()

  const navigate = useNavigate()

    return (
        <HeaderStyle>
            <span className="logo" onClick={() => {navigate("/")}}>Dinner Express ®</span>
            <div className="menu">
                <button onClick={() => setCreateRestaurantModalOpen(true)}>Cadastrar Restaurante</button>
                <span>|</span>
                <div className="input-place">
                    <button onClick={() => {
                        navigate("/isopen")}}>Verificar disponibilidade de horários <BiSearchAlt/> </button>
                </div>
            </div>
        </HeaderStyle>
    )
}