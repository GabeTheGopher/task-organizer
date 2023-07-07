import Card from "../Card";
import CardColumn from "../CardColumn";
import { StyledCardContainer, StyledCardContainerTitle } from "./style";


export default function CardContainer({tasks, setTasks, ...props}) {
    
    return(
        <StyledCardContainer color={props.color} background={props.background} >
            <StyledCardContainerTitle>
                {props.title}
            </StyledCardContainerTitle>
            <CardColumn 
                title={props.title} 
                tasks={tasks}
                setTasks={setTasks}
                color={props.color} 
                background={props.background}
            />
        </StyledCardContainer>
    )
}