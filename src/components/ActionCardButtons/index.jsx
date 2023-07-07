import { useEffect, useState } from "react";
import { showSuccessToast } from "../../helpers/toastify";
import Modal from "../Modal";
import { StyledActionButtons, StyledActionCardButtons } from "./style";
import { FaTrash , FaPen} from "react-icons/fa6";


export default function ActionCardButtons ({ id, tasks, setTasks}) {

    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleOpenModal = () => {
        setIsModalOpen(true)
    }

    const handleDeleteButton = (id) => {
        const copy = tasks.filter((task) => task.id !== id)  
        setTasks(copy)
        showSuccessToast("Tarefa excluída com sucesso!")
    }
    
    return(
        <StyledActionCardButtons>
            <StyledActionButtons onClick={() => handleOpenModal()}>
                <FaPen />
            </StyledActionButtons>
            <StyledActionButtons onClick={() => handleDeleteButton(id)}>
                <FaTrash />
            </StyledActionButtons>

            <Modal 
                isModalOpen={isModalOpen} 
                setIsModalOpen={setIsModalOpen}
                id={id}
                tasks={tasks}
                setTasks={setTasks}
            />
        </StyledActionCardButtons>
    )
}