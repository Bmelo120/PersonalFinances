import { useState } from "react"
import { useAppSelector } from "../../../redux/hooks"
import { useLocation } from "react-router-dom"
import { Container, Header, HeaderLogo, Link } from "./styles"

export const Sidebar = () => {
    
    const [isExpanded, setIsExpanded ] = useState(true)

    const auth = useAppSelector(state => state.auth)
    const { pathname } = useLocation()

    const handleToggleExpand = () => setIsExpanded(!isExpanded)
    
    return (
        <div> 
            <Container $expanded={isExpanded}>
                <Header
                    {isExpanded &&
                        <Link to='/'>
                            <HeaderLogo
                                src="/logo.png"
                                alt=" Logo Image"
                            />
                        </Link>
                    }
                >
                </Header>

            </Container>
        </div>
    )
}