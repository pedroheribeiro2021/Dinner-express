import { useEffect, useState } from "react"
import cover from "../../assets/dinner wallpapaer.jpg"
import { Header } from "../../components/header"
import { useRestaurantContext } from "../../contexts/restaurantsContext"
import { HomeStyle } from "./style"
import { useModalContext } from "../../contexts/modalContext"
import ReactModal from "react-modal"
import { ModalCreateRestaurant } from "../../components/modal create restaurant"

export const Home = () => {
    const { getAllRestaurants, restaurants } = useRestaurantContext()

    const { isCreateRestaurantModalOpen, setCreateRestaurantModalOpen } = useModalContext()
    
    useEffect(() => {
        (async () => {
          await getAllRestaurants()
        })()
      }, [])

    return (
        <>
        <Header/>
        <HomeStyle>
            <ModalCreateRestaurant/>
            <h1>LUGARES INCRIVEIS!</h1>
            <h3 className="subtitle1">Seja bem vindo ao Food Express!
                Seu portal de restaurantes mais completo da internet.
            </h3>
            <h2>DINNER EXPRESS</h2>
            <h3 className="subtitle2">Lanchonetes, restaurantes, sorveterias e muito mais para matar sua fome.</h3>
            <div className="restaurants-hub">
                <img className="cover" src={cover} alt=""/>
                <button className="register-restaurant" onClick={() => setCreateRestaurantModalOpen(true)}>Cadastrar restaurante</button>
                <ul>
                    {
                        restaurants.length > 0 ? restaurants.map((restaurant: any, i: number) => (
                            <li key={i}>
                                <h4>{restaurant.name}</h4>
                                <p>{restaurant.type}</p>
                                <h5>Horário de funcionamento:</h5>
                                <ul className="operating-time">
                                {
                                    restaurant.operatingTimes.map((times: any) => 
                                        (
                                            <>
                                            <li>
                                               ⋅ {times.dayOfWeek}
                                            {/* </li> */}
                                            {/* <li> */}
                                                ⋅ De {times.openingTime} 
                                            {/* </li> */}
                                            {/* <li> */}
                                                ⋅ Às {times.closingTime}
                                            </li>
                                            </>

                                        )
                                    )
                                }
                                </ul>
                                <div className="card-buttons">
                                    <button>Verificar Horários</button>
                                    <button>Entrar em contato</button>
                                </div>
                            </li>
                        )) : (
                            <li>Ainda não há restaurantes cadastrados</li>
                        )
                    }
                </ul>
            </div>
        </HomeStyle>
        </>
    )
}