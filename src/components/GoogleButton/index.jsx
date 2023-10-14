import { StyledGoogleButton } from "./style";
import { FaGoogle } from "react-icons/fa6";
import { UserAuth } from "../../context/AuthContext";

export default function GoogleButton({label, onClick}) {

    const { googleSignIn } = UserAuth()

    const handleGoogleSignIn = async () => {
        try {
            googleSignIn()
        } catch(error) {
            console.log(error)
        }
    }
    
    return(
        <StyledGoogleButton onClick={handleGoogleSignIn}>
            <FaGoogle />
            {label}
        </StyledGoogleButton>
    )
}