import { ReactNode, useContext, useState } from "react";
import { createContext } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";

interface IRestaurantContext {
    getAllRestaurants: () => Promise<void>
    restaurants: any
    setRestaurants: React.Dispatch<React.SetStateAction<any>>
    createRestaurants: (payload: any) => Promise<void>
    weeksDay: string[]
    isOpenRestaurants: (payload: any) => Promise<void>
    statusRestaurant: any
}

interface IRestaurantProps {
  children: ReactNode
}

export const RestaurantContext = createContext<IRestaurantContext>({} as IRestaurantContext)

export const RestaurantProvider = ({children}: IRestaurantProps) => {
    const [restaurants, setRestaurants] = useState([])
    const [weeksDay, setWeeksDay] = useState(['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'])
    const [statusRestaurant, setStatusRestaurant] = useState()


    const getAllRestaurants = async (): Promise<void> => {
        try {
          const { data } = await api.get("/restaurant")
          setRestaurants(data)
          return data
        } catch (error) {
          console.error(error)
        }
    }

    const createRestaurants = async (payload: any): Promise<void> => {
        try {
            const { data } = await api.post("/restaurant", payload)
            toast.success("Anúncio criado com Sucesso")
            setRestaurants(data)
            return data;
          } catch (error) {
            toast.error("Falha ao criar Anúncio")
          }
    }

    const isOpenRestaurants = async (payload: any): Promise<void> => {
      try {
          const { data } = await api.post("/isopen", payload)
          // toast.success("Anúncio criado com Sucesso")
          setStatusRestaurant(data.status)
          console.log(data)
          return data;
        } catch (error) {
          // toast.error("Falha ao criar Anúncio")
        }
  }

    return (
        <RestaurantContext.Provider
            value={{
                getAllRestaurants,
                restaurants, 
                setRestaurants,
                createRestaurants,
                weeksDay,
                isOpenRestaurants,
                statusRestaurant
            }}
        >
            {children}
        </RestaurantContext.Provider>
    )
}

export const useRestaurantContext = () => useContext(RestaurantContext)