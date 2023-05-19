import { useEffect, useState } from "react"
import cover from "../../assets/dinner wallpapaer.jpg"
import { Header } from "../../components/header"
import { useRestaurantContext } from "../../contexts/restaurantsContext"
import { HomeStyle } from "./style"
import { ModalCreateRestaurant } from "../../components/modal create restaurant"

export const Home = () => {
    const { getAllRestaurants, restaurants } = useRestaurantContext()

    const [expandedRestaurant, setExpandedRestaurant] = useState(null)
    
    useEffect(() => {
        getAllRestaurants()
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
                <ul className="restaurants-list">
                    {
                        restaurants.length > 0 ? restaurants.map((restaurant: any, i: number) => (
                            <li key={i}>
                                {expandedRestaurant !== restaurant && (
                                    <>
                                        <h4>{restaurant.name}</h4>
                                        <p>{restaurant.type}</p>
                                    </>
                                )}
                                {
                                    expandedRestaurant === restaurant && (
                                        <>
                                        <h5>Horário de funcionamento:</h5>
                                          <ul className="operating-time">
                                            <button onClick={() => setExpandedRestaurant(null)}>Voltar</button>
                                            {restaurant.operatingTimes.map((times: any, i: number) => (
                                                <li key={times.dayOfWeek}>
                                                {times.dayOfWeek} ⋅ De {times.openingTime} ⋅ Às {times.closingTime}
                                              </li>
                                            ))}
                                          </ul>
                                        </>
                                      )
                                }
                                <div className="card-buttons">
                                {expandedRestaurant !== restaurant && (
                                    <>
                                    <button onClick={() => setExpandedRestaurant(restaurant)}>
                                        Horário de funcionamento
                                    </button>
                                    <a
                                        target="_blank"
                                        href={`https://wa.me/55${restaurant.cellPhone}?text=Ol%C3%A1,%20Olá%20gostaria%20de%20fazer%20o%20uma%20reserva`}
                                        rel="noreferrer"
                                    >Entrar em contato</a>
                                    </>
                                )}
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