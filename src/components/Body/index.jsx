import CardContainer from "../CardContainer";
import { StyledBody } from "./style";

export default function Body({tasks, setTasks, listData}) {
    

    return(
        <StyledBody>
            {listData.map((item, i) => (
                <CardContainer
                key={i}
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