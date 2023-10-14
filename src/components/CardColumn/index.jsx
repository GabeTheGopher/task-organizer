import Card from "../Card";
import { StyledCardColumn } from "./style";

export default function CardColumn({tasks, setTasks, title, color, background}) {

    return(
        <StyledCardColumn>
            {tasks.map((item, i) => {
                if(item.status === title) {
                    return(
                        <Card 
                            key={i}
                            id={item.id}
                            title={item.title}
                            description={item.description}
                            color={color}
                            background={background}
                            tasks={tasks}
                            setTasks={setTasks}
                        />
                    )
                } else {
                    return <></>
                }
            })}
        </StyledCardColumn>
    )
}