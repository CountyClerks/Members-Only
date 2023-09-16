import '../nav.css'
import { Navbar, Container, Nav} from 'react-bootstrap'
export default function NavBar() {
    // const modalChange = () => {
        
    // }


    return (
        <Navbar bg="primary" expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="">Member's Only</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav className="me-auto">
                    <Nav.Link href="#signup">Sign Up</Nav.Link>
                    <Nav.Link href="#login">Log In</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}