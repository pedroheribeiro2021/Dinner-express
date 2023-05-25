import { useEffect } from "react";
import { useModalContext } from "../../contexts/modalContext";
import { AiOutlineClose } from "react-icons/ai";
import { useRestaurantContext } from "../../contexts/restaurantsContext";
import { useFieldArray, useForm } from "react-hook-form";
import { ModalCreateRestaurantStyled } from "./style";
import * as yup from "yup";
import toast, { Toaster } from 'react-hot-toast';



export const ModalCreateRestaurant = () => {
    const { createRestaurants, getAllRestaurants, weeksDay } = useRestaurantContext()

    const { isCreateRestaurantModalOpen, setCreateRestaurantModalOpen } = useModalContext()

    useEffect(() => {
        (async () => {
          await getAllRestaurants()
        })()
      }, [])

    const cnpjSchema = yup.string().matches(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/, "Formato de CNPJ inválido")

    const submit = async (data: any) => {
        cnpjSchema.isValid(data.cnpj)
        .then((isValid) => {
            if (isValid) {
                createRestaurants(data)
                closeModal()
                window.location.reload()
                console.log("CNPJ válido")
            } else {
                toast("CNPJ inválido")
            }
        })
        .catch((error) => {
            console.log("Erro na validação do CNPJ:", error);
        })
    }

    const closeModal = () => setCreateRestaurantModalOpen(false)

    const {
        control,
        register, 
        handleSubmit,
        formState: {errors},
    } = useForm()

    const { fields, append, remove } = useFieldArray({
        control,
        name: "operatingTimes",
      }) as { fields: { id: string, dayOfWeek: string, openingTime: string, closingTime: string }[], append: any, remove: any };

    const handleAddOperatingTime = () => {
        append({
          dayOfWeek: "",
          openingTime: "",
          closingTime: "",
        });
      };

    return (
        <ModalCreateRestaurantStyled
        isOpen={isCreateRestaurantModalOpen}
        onRequestClose={closeModal}
        overlayClassName="modal-overlay"
        className="modal-content"
        >
        <div><Toaster/></div>
        <div className="container_modal_items">
            <div className="close_modal">
                <h3>Cadastrar Restaurante</h3>
                <button onClick={closeModal}>{<AiOutlineClose/>}</button>
            </div>
                <form onSubmit={handleSubmit(submit)} className='register-form'>
                    <label htmlFor="">Nome</label>
                    <input type="text" id="name" placeholder="Nome do estabelecimento" {...register("name")}/>
                    <label htmlFor="">CNPJ</label>
                    <input type="text" id="cnpj" placeholder="99.999.999/0001-99" {...register("cnpj")}/>
                    <label htmlFor="">Categoria</label>
                    <input type="text" id="type" placeholder="Categoria do estabelecimento" {...register("type")}/>
                    <label htmlFor="">Contato</label>
                    <input type="text" id="cellPhone" placeholder="6198888888" {...register("cellPhone")}/>
                    <div>
                        <button
                            id="add_operating_time"
                            type="button"
                            onClick={handleAddOperatingTime}
                        >
                            Adicionar horário de funcionamento
                        </button>
                    </div>
                    {fields.map((field, index) => (
                    <div key={field.id} className="input-date">
                        <label htmlFor="">Dia da semana</label>
                        <select {...register(`operatingTimes[${index}].dayOfWeek`)}>
                            {
                                weeksDay.map((el, i) => (
                                    <option key={i} value={el}>{el}</option>
                                ))
                            }
                        </select> 
                        <label htmlFor="">Hora de abertura</label>
                        <input
                        type="time"
                        defaultValue={field.openingTime}
                        {...register(`operatingTimes[${index}].openingTime`)}
                        />
                        <label htmlFor="">Hora de fechamento</label>
                        <input
                        type="time"
                        defaultValue={field.closingTime}
                        {...register(`operatingTimes[${index}].closingTime`)}
                        />
                        <button type="button" onClick={() => remove(index)}>
                        Remover
                        </button>
                    </div>
                    ))}
                    <button id="create" type="submit">
                        Criar Restaurante
                    </button>
                </form>
            </div>
        </ModalCreateRestaurantStyled>
    )
}