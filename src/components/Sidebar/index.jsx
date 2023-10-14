import FormContainer from "../FormContainer";
import ProfileSection from "../ProfileSection";
import { StyledSidebar, StyledSidebarTitle } from "./style";

export default function Sidebar({tasks, setTasks}) {
    
    return(
        <StyledSidebar>
            <ProfileSection />
            <StyledSidebarTitle>
                ADICIONAR TAREFA
            </StyledSidebarTitle>
            <FormContainer tasks={tasks} setTasks={setTasks}/>
        </StyledSidebar>
    )
}