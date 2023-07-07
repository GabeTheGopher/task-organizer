import FormContainer from "../FormContainer";
import { StyledSidebar, StyledSidebarTitle } from "./style";

export default function Sidebar({tasks, setTasks}) {
    
    return(
        <StyledSidebar>
            <StyledSidebarTitle>
                ADICIONAR TAREFA
            </StyledSidebarTitle>
            <FormContainer tasks={tasks} setTasks={setTasks}/>
        </StyledSidebar>
    )
}