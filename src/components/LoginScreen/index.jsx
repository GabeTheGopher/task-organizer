import { StyledLoginScreen, StyledLoginScreenTitle } from "./style";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import GoogleButton from "../GoogleButton";

export default function LoginScreen() {

    const { user } = UserAuth()
    const  navigate = useNavigate()

    
    // const handleGoogleSignIn = async() => {
    //     try {
    //         await googleSignIn()
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    
    useEffect(() => {
        if(user !== null){
            navigate('/')
        }
    },[user])

    return(
        <StyledLoginScreen>
            <StyledLoginScreenTitle>
                Bem-vindo<br/> ao seu organizador de tarefas!
            </StyledLoginScreenTitle>
            {/* <GoogleButton 
                label="Entrar com Google"
                onClick={handleGoogleSignIn}
            /> */}
            <GoogleButton
                label="Entrar com Google"
            />
        </StyledLoginScreen>
    )
}