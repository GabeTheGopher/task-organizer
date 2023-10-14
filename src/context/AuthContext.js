import { useContext, createContext, useEffect, useState } from "react";
import { 
 GoogleAuthProvider, 
 signInWithPopup, 
 signOut,
 onAuthStateChanged, 
} from "firebase/auth";
import { auth } from "../services/firebase";


const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState(null)

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
        .catch((error) => {
            console.error(error);
        });
    }

    const logOut = () => {
        signOut(auth)
        setUser(null)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            unsubscribe()
        }
    }, [])    

    return <AuthContext.Provider value={{googleSignIn, logOut, user }}>
            {children}
        </AuthContext.Provider>
}

export const UserAuth = () => {
    return useContext(AuthContext)
}