import { useContext, useEffect, useState } from "react";
import ReactModal from "react-modal";
import { ModalContext, useModalContext } from "../../contexts/modalContext";
import { AiOutlineClose } from "react-icons/ai";
import { useRestaurantContext } from "../../contexts/restaurantsContext";
import { useFieldArray, useForm } from "react-hook-form";


export const ModalCreateRestaurant = () => {
    const { createRestaurants, getAllRestaurants, weeksDay } = useRestaurantContext()

    const { isCreateRestaurantModalOpen, setCreateRestaurantModalOpen } = useModalContext()

    useEffect(() => {
        (async () => {
          await getAllRestaurants()
        })()
      }, [])

    // const [weeksDay, setWeeksDay] = useState(['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'])

    // const { control, register, handleSubmit,  } = useForm();

    const submit = async (data: any) => {
        console.log(data)
        createRestaurants(data)
        closeModal()
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

    // const [numberOfDays, setNumberOfDays] = useState(2);

    // const handleAddImageField = () => {
    //   setNumberOfDays((prev) => prev + 1);
    // };

    return (
        <ReactModal
            isOpen={isCreateRestaurantModalOpen}
            onRequestClose={closeModal}
            overlayClassName="modal-overlay"
            className="modal-content"
        >
            <div className="container_modal_items">
            <div className="close_modal">
                <h3>Cadastrar Endereço</h3>
                <button onClick={closeModal}>{<AiOutlineClose/>}</button>
            </div>
            <form onSubmit={handleSubmit(submit)} className='register-form'>
                <label htmlFor="">Nome</label>
                <input type="text" id="name" placeholder="" {...register("name")}/>
                <label htmlFor="">CNPJ</label>
                <input type="text" id="cnpj" placeholder="" {...register("cnpj")}/>
                <label htmlFor="">Categoria</label>
                <input type="text" id="type" placeholder="" {...register("type")}/>
                <label htmlFor="">Dias da semana</label>
                {fields.map((field, index) => (
                <div key={field.id} className="input_modal">
                    <label htmlFor="">Dia da semana</label>
                    <select {...register(`operatingTimes[${index}].dayOfWeek`)}>
                        {
                            weeksDay.map(el => (
                                <option value={el}>{el}</option>
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
                <div>
                    <button
                    id="add_operating_time"
                    type="button"
                    onClick={handleAddOperatingTime}
                    >
                        Adicionar horário de funcionamento
                    </button>
                </div>
                <button id="create" type="submit">
                    Criar Restaurante
                </button>
            </form>
            </div>
        </ReactModal>
    )
}