import { useForm } from "react-hook-form"
import { Header } from "../../components/header"
import { useRestaurantContext } from "../../contexts/restaurantsContext"
import cover from "../../assets/isopencover.jpeg"
import { IsOpenPageStyle } from "./style"
import { useNavigate } from "react-router"
<<<<<<< HEAD
import React from "react"
=======
>>>>>>> f6c0f0e2d69a04a2000602ec7296241d2f54317a


export const IsOpenPage = () => {
    const { statusRestaurant, isOpenRestaurants, weeksDay, restaurants } = useRestaurantContext()

  const navigate = useNavigate()
    
    const {
        register, 
        handleSubmit,
        formState: {errors},
    } = useForm()

    const submit = async (data: any) => {
        isOpenRestaurants(data)
        console.log(statusRestaurant)
    }

    return (
        <>
        <Header/>
        <IsOpenPageStyle>
            <form onSubmit={handleSubmit(submit)}>
                <div className="head-container">
                    <label htmlFor="">Nome</label>
                    <button onClick={() => {navigate("/")}}>Voltar</button>
                </div>
                    <select {...register("name")}>
                        {
                            restaurants.map((rest:any, index:number) => (
                                <option key={index} value={rest.name}>{rest.name}</option>
                            ))
                        }
                    </select>
                <label htmlFor="">Dia da semana</label>
                    <select {...register(`dayOfWeek`)}>
                        {
                            weeksDay.map((day:string, index: number) => (
                                <option key={index} value={day}>{day}</option>
                            ))
                        }
                    </select> 
                <label htmlFor="">Horário</label>
                <input
                    type="time"
                    {...register(`time`)}
                />
                <button id="create" type="submit">
                    Verificar disponibilidade de Restaurante
                </button>
            </form>
            <img className="cover" src={cover} alt=""/>
            <div className="answer">
                {statusRestaurant}
            </div>
        </IsOpenPageStyle>
        </>
    )
}