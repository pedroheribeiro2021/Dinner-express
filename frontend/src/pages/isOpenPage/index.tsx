import { useForm } from "react-hook-form"
import { Header } from "../../components/header"
import { useRestaurantContext } from "../../contexts/restaurantsContext"
import cover from "../../assets/isopencover.jpeg"
import { IsOpenPageStyle } from "./style"


export const IsOpenPage = () => {
    const { statusRestaurant, isOpenRestaurants, weeksDay, restaurants } = useRestaurantContext()
    
    const {
        control,
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
                <label htmlFor="">Nome</label>
                    <select {...register("name")}>
                        {
                            restaurants.map((rest:any) => (
                                <option value={rest.name}>{rest.name}</option>
                            ))
                        }
                    </select> 
                {/* <input type="text" id="name" placeholder="" {...register("name")}/> */}
                <label htmlFor="">Dia da semana</label>
                    <select {...register(`dayOfWeek`)}>
                        {
                            weeksDay.map((el:string) => (
                                <option value={el}>{el}</option>
                            ))
                        }
                    </select> 
                <label htmlFor="">Horário</label>
                <input
                    type="time"
                    // defaultValue={field.closingTime}
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