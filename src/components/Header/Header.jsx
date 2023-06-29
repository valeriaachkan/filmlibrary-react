import { StyledHeader,  Nav, Link } from "./Header.styled";

export const Header = () => {
    return (
        <StyledHeader>
                <Nav>
                        <Link to='/'>Home</Link>
                        <Link to='/movies'>Movies</Link>
                </Nav>
        </StyledHeader>
    )
}