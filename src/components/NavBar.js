import { Navbar, Container, Nav, } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

function NavBar() {
    const location = useLocation();
    return (
        location.pathname !== "/login" ?
        
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">DBO Management</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link className='nav-link' to="/home">Home</Link>
                        <Link className='nav-link' to="/costumer">Costumer</Link>
                        <Link className='nav-link' to="/order">Order</Link>
                    </Nav>                        
                </Navbar.Collapse>
            </Container>
        </Navbar>
        : null
    )
}

export default NavBar;