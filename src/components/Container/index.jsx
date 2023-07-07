import { useEffect, useState } from "react";
import Body from "../Body"; 
import Sidebar from "../Sidebar";
import { StyledContainer } from "./style";

export default function Container() {

    const listData = [
        { title: "Pendente", color: "#a93a39", background: "#fbc7c6" },
        { title: "Em andamento", color: "#b16821", background: "#fae7ce" },
        { title: "Concluído", color: "#3a6fa2", background:"#cae3ff" },
    ]

    const [tasks, setTasks] = useState([])


    return (
        <StyledContainer>
            <Sidebar tasks={tasks} setTasks={setTasks}/>
            <Body listData={listData} tasks={tasks} setTasks={setTasks}/>
        </StyledContainer>
    )
}