import { ReactNode } from "react";
import { RestaurantProvider } from "../../contexts/restaurantsContext";
import { ModalProvider } from "../../contexts/modalContext";

interface iProvidersProps {
    children: ReactNode;
}

export const Providers = ({children}: iProvidersProps) => {

    return (
        <ModalProvider>
            <RestaurantProvider>
                {children}
            </RestaurantProvider>
        </ModalProvider>
    )
}