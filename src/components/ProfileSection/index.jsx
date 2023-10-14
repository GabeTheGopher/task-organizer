import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { StyledProfileDisplayName, StyledProfileLogOut, StyledProfilePicture, StyledProfileSection, StyledProfileTextArea } from "./style";

export default function ProfileSection () {

    const { user, logOut } = UserAuth();
    const  navigate = useNavigate()

    console.log(user.photoURL)


    const handleSignOut = async () => {
        try {
            await logOut()
            navigate('/login')
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <StyledProfileSection>
            <StyledProfilePicture src={user.photoURL}/>
            <StyledProfileTextArea>
                <StyledProfileDisplayName>
                    {user.displayName}
                </StyledProfileDisplayName>
                <StyledProfileLogOut onClick={handleSignOut}>
                    Sair
                </StyledProfileLogOut>
            </StyledProfileTextArea>
        </StyledProfileSection>
    )
}