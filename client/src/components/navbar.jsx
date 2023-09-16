import '../nav.css'
import { Navbar, Container, Nav, Button, Modal} from 'react-bootstrap'
export default function NavBar() {

    // const modalChange = () => {
        
    // }


    return (
        <Navbar bg="primary" expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="">Member's Only</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav className="me-auto">
                    <Button>Sign Up</Button>
                    <Button>Log In</Button>
                </Nav>
            </Container>
        </Navbar>
    )
}