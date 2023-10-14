import { useState } from "react";
import { StyledFormContainer, StyledFormTitleInput, StyledFormDescriptionInput, StyledFormButton } from "./style";
import Select from "react-select"
import { showSuccessToast, showErrorToast } from '../../helpers/toastify';
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../services/firebase";
import { UserAuth } from "../../context/AuthContext";

export default function FormContainer({ tasks, setTasks }) {
    
    const [titleInput, setTitleInput] = useState("");
    const [descriptionInput, setDescriptionInput] = useState("")
    const [selectedOption, setSelectedOption] = useState("Pendente");
    
    const { v4: uuidv4 } = require('uuid');
    
    const { user } = UserAuth();

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

        if(!titleInput){
            showErrorToast("Digite o título da tarefa")
            return
        }

        if(!descriptionInput){
            showErrorToast("Digite a descrição da tarefa")
            return
        }

        if(titleInput && descriptionInput){
            let id = uuidv4();

            const newTask ={
                id,
                title: titleInput,
                description: descriptionInput,
                status: selectedOption,
            }

            setTasks([...tasks, newTask])

            await addDoc(collection(db, 'tasks'), {
                userId: user.uid,
                id,
                title: titleInput,
                description: descriptionInput,
                status: selectedOption,
            })

            setTitleInput("")
            setDescriptionInput("")
            showSuccessToast("Tarefa Adicionada com sucesso")
        }
    };

    const options = [
        { value: 'Pendente', label: 'Pendente'  },
        { value: 'Em andamento', label: 'Em andamento' },
        { value: 'Concluído', label: 'Concluído'}
    ];
    
    return (
        <StyledFormContainer>
            Título
            <StyledFormTitleInput value={titleInput} onChange={handleTitleChange}/>
            Descrição
            <StyledFormDescriptionInput value={descriptionInput} onChange={handleDescriptionChange}/>
            <Select 
                options={options}
                defaultValue={{value: 'Pendente', label: 'Pendente' }}
                isSearchable={false}
                onChange={handleOptionChange}
            />
            <StyledFormButton onClick={handleClick}>
                Adicionar Tarefa
            </StyledFormButton>

        </StyledFormContainer>
    )
}