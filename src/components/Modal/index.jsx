import { useState } from "react";
import Select from "react-select"
import { StyledFormButton, StyledFormDescriptionInput, StyledFormTitleInput, StyledModal, StyledModalBackground } from "./style"
import { showErrorToast, showSuccessToast } from "../../helpers/toastify";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../services/firebase";

export default function Modal({ isModalOpen, setIsModalOpen, id, tasks, setTasks }) {

    const task = tasks.find((task) => task.id === id)



    const [titleInput, setTitleInput] = useState(task.title);
    const [descriptionInput, setDescriptionInput] = useState(task.description)
    const [selectedOption, setSelectedOption] = useState(task.status);


    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    const handleModal = (e) => {
        e.stopPropagation();
    }

    const handleTitleChange = (event) => {
        setTitleInput(event.target.value)
    }

    const handleDescriptionChange = (event) => {
        setDescriptionInput(event.target.value)
    }


    const handleOptionChange = (option) => {
        setSelectedOption(option.value)
    };

    const handleClick = async () => {

        if (!titleInput) {
            showErrorToast("O título não pode ser vazio")
            return
        }

        if (!descriptionInput) {
            showErrorToast("A descrição não pode estar vazia")
            return
        }

        if (titleInput && descriptionInput) {
            const taskToUpdateIndex = tasks.findIndex((task) => task.id === id);

            if (taskToUpdateIndex !== -1) {
                // Cria uma cópia atualizada da tarefa
                const updatedTask = {
                    id,
                    title: titleInput,  
                    description: descriptionInput,
                    status: selectedOption,
                };

                const updatedTasks = [...tasks];

                await updateDoc(doc(db, 'tasks', id), {
                    title: titleInput,
                    description: descriptionInput,
                    status: selectedOption
                })

                updatedTasks[taskToUpdateIndex] = updatedTask;

                // Define o estado tasks com as tarefas atualizadas
                setTasks(updatedTasks);

            }

            showSuccessToast("Tarefa editada com sucesso")
            setIsModalOpen(false)
        }
    }

    const options = [
        { value: 'Pendente', label: 'Pendente' },
        { value: 'Em andamento', label: 'Em andamento' },
        { value: 'Concluído', label: 'Concluído' }
    ];

    if (isModalOpen) {
        return (
            <StyledModalBackground onClick={() => handleCloseModal()}>
                <StyledModal onClick={(e) => handleModal(e)}>
                    Título
                    <StyledFormTitleInput value={titleInput} onChange={handleTitleChange} />
                    Descrição
                    <StyledFormDescriptionInput value={descriptionInput} onChange={handleDescriptionChange} />
                    <Select
                        options={options}
                        defaultValue={{ value: 'Pendente', label: 'Pendente' }}
                        isSearchable={false}
                        onChange={handleOptionChange}
                    />
                    <StyledFormButton onClick={handleClick}>
                        Salvar alterações
                    </StyledFormButton>
                </StyledModal>
            </StyledModalBackground>
        )
    }

    return null
}