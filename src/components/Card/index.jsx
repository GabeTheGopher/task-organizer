
import { StyledCard, StyledCardDescription, StyledCardTitle } from "./style";
import ActionCardSection from "../ActionCardSection";


export default function Card({ id, title, description, color, background, tasks, setTasks}) {


    
    return (
        <StyledCard>
            <StyledCardTitle>
                {title}
            </StyledCardTitle>
            <StyledCardDescription>
                {description}
            </StyledCardDescription>
            <ActionCardSection
                id={id}
                color={color} 
                background={background} 
                tasks={tasks}
                setTasks={setTasks}
            />
            
        </StyledCard>
    )
}