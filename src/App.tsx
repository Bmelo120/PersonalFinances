import { useEffect } from "react"
import { useAuth } from "./hooks/auth"
import { ThemeProvider } from "styled-components"
import { useTheme } from "./hooks/theme"
import { lightTheme } from "./themes/lightTheme"
import { darkTheme } from "./themes/darkTheme"
import { MainRoutes } from "./routes"

const App = () => {

  const{ handleAuthenticateUser } = useAuth()
  const{ handleInitTheme, theme } = useTheme()

  useEffect(() => {
    handleAuthenticateUser()

    handleInitTheme()
  }, [])

  return(
   <ThemeProvider theme={ theme == 'light' ? lightTheme : darkTheme}>
      <MainRoutes/>
   </ThemeProvider>
  )
}

export default App