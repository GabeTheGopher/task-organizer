import Container from "./components/Container/index";
import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { ToastContainer } from "react-toastify";
import { AuthContextProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginScreen from "./components/LoginScreen";

export default function App () {
  return(
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthContextProvider>
        <Router>
          <Routes>
            <Route 
              path="/" 
              element={<Container 
              />}
            />
            <Route 
              path="/login" 
              element={<LoginScreen />}
            />
          </Routes>
        </Router>
        <ToastContainer />    
      </AuthContextProvider>
    </ThemeProvider>
  )
}
