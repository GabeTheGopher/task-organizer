import CardContainer from "../CardContainer";
import { StyledBody } from "./style";

export default function Body({tasks, setTasks, listData}) {
    

    return(
        <StyledBody>
            {listData.map(item => (
                <CardContainer
                key={item.title}
                title={item.title}
                color={item.color} 
                background={item.background}
                tasks={tasks}
                setTasks={setTasks}
                />
            ))}
        </StyledBody>
    )
}