import { ReactNode, useContext, useState } from "react";
import { createContext } from "react";

interface IModalContext {
    isCreateRestaurantModalOpen: boolean
    setCreateRestaurantModalOpen: React.Dispatch<React.SetStateAction<any>>
}

interface IModalProps {
  children: ReactNode
}

export const ModalContext = createContext<IModalContext>({} as IModalContext)

export const ModalProvider = ({children}: IModalProps) => {
    const [isCreateRestaurantModalOpen, setCreateRestaurantModalOpen] = useState(false)

    return (
        <ModalContext.Provider
            value={{
                isCreateRestaurantModalOpen, 
                setCreateRestaurantModalOpen
            }}
        >
            {children}
        </ModalContext.Provider>
    )
}

export const useModalContext = () => useContext(ModalContext)