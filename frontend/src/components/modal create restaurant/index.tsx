import { useContext, useEffect, useState } from "react";
import ReactModal from "react-modal";
import { ModalContext, useModalContext } from "../../contexts/modalContext";
import { AiOutlineClose } from "react-icons/ai";
import { useRestaurantContext } from "../../contexts/restaurantsContext";
import { useFieldArray, useForm } from "react-hook-form";


export const ModalCreateRestaurant = () => {
    const { createRestaurants, getAllRestaurants } = useRestaurantContext()

    const { isCreateRestaurantModalOpen, setCreateRestaurantModalOpen } = useModalContext()

    useEffect(() => {
        (async () => {
          await getAllRestaurants()
        })()
      }, [])

    // const [weeksDay, setWeeksDay] = useState(['segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado', 'domingo'])

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
                {/* <select {...register("dayOfWeek")}>
                    <option value="Segunda">Segunda</option>
                    <option value="Segunda">Terça</option>
                </select> */}
                {/* {
                    weeksDay.length > 0 ? weeksDay.map((day) => (
                        <input type="text" value={day} {...register("dayOfWeek")}/>
                    )) : (
                        <></>
                    )
                } */}
                {/* <label htmlFor="">Hora de abertura</label>
                <input type="time" {...register("openingTime")}/>
                <label htmlFor="">Hora de fechamento</label>
                <input type="time" {...register("closingTime")}/> */}
                {/* {[...Array(numberOfDays)].map((_, index) => 
                ( */}
                    {/* {
                        weeksDay.map((el, i) => (
                            <>                                
                            <div className="input_modal" key={`image_${i}`}>
                                <label htmlFor="">{el}</label>
                                <input
                                    type="text"
                                    // placeholder="Link da imagem"
                                    value={el}
                                    {...register(`operatingTimes.dayOfWeek${i + 1}`)}
                                />
                                <label htmlFor="">Hora de abertura</label>
                                <input type="time" {...register(`operatingTimes.openingTime`)}/>
                                <label htmlFor="">Hora de fechamento</label>
                                <input type="time" {...register("operatingTimes.closingTime")}/>
                                </div>
                                </>
                            ))
                        } */}

                {/* ))} */}
                {fields.map((field, index) => (
                <div key={field.id} className="input_modal">
                    <label htmlFor="">Dia da semana</label>
                    <input
                    type="text"
                    defaultValue={field.dayOfWeek}
                    {...register(`operatingTimes[${index}].dayOfWeek`)}
                    />
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