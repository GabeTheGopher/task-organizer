import ActionCardButtons from "../ActionCardButtons";
import { StyledActionCardSection, StyledActionText } from "./style";

export default function ActionCardSection ({ id, color, background, tasks, setTasks }){
    return(
        <StyledActionCardSection color={color} background={background}>
            <StyledActionText>
                Ações:
            </StyledActionText>
            <ActionCardButtons id={id} tasks={tasks} setTasks={setTasks}/>
        </StyledActionCardSection>
    )
}