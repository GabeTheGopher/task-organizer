import Container from "./components/Container/index";
import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { ToastContainer } from "react-toastify";


export default function App () {

  return(
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container/>
      <ToastContainer />
    </ThemeProvider>
  )
}
