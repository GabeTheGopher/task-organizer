import { useEffect, useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import Body from "../Body"; 
import Sidebar from "../Sidebar";
import { StyledContainer, StyledContainerNull } from "./style";
import { useNavigate } from "react-router-dom";
import { db } from "../../services/firebase";
import { collection, onSnapshot, query } from "firebase/firestore";
import LoadingText from "../LoadingText";

export default function Container() {

    const { user } = UserAuth()
    const navigate = useNavigate()

    const [tasks, setTasks] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
    }, []);

    useEffect(() => {
        if(user) {
            const q = query(collection(db,'tasks'))
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
              let tasksArr = []
              querySnapshot.forEach((doc) => {
                tasksArr.push({...doc.data(), id: doc.id})
              })
              setTasks(tasksArr.filter(task => {
                return task.userId === user.uid
              }))
            })
            return () => unsubscribe()
        }
    },[user])

    const listData = [
        { title: "Pendente", color: "#a93a39", background: "#fbc7c6" },
        { title: "Em andamento", color: "#b16821", background: "#fae7ce" },
        { title: "Concluído", color: "#3a6fa2", background:"#cae3ff" },
    ]

    useEffect(() => {
        if(user === null  && isLoading === false){
            navigate('/login')
        }
    },[isLoading])
    
    
    if (isLoading) {
        return <LoadingText text={"Carregando..."} />;
    }else{
        

        return (
            <StyledContainer>
                {!user ? (
                    <>
                        <StyledContainerNull>
                            Por favor faça o login para continuar
                        </StyledContainerNull>
                    </>
                ):
                (
                    <>
                        <Sidebar tasks={tasks} setTasks={setTasks}/>
                        <Body listData={listData} tasks={tasks} setTasks={setTasks}/>
                    </>
                )
                }
            </StyledContainer>
        )
    }
}