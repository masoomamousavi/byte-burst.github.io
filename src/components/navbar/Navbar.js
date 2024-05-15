
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Link } from 'react-router-dom';
import { useEffect } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Navbar.css'
import { useState } from 'react';
// import { isLogin } from '../../utils';
function Navbar1() {
    // const [loginStatus, setLoginStatus] = useState(isLogin() ? 'Log Out' : 'Login')
    const expand = 'md';
    // const logoutHandle = () => {
    //     document.cookie = "username=admin; expires=Thu, 18 Dec 2023 12:00:00 UTC";
    //     setLoginStatus('Login')
    // }
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Navbar key={expand} expand={expand} className={scrolled ? 'my-nav scrolled' : 'my-nav'} sticky="top">
            <Container >
                <Navbar.Brand className='logo'><Link to='/'>Byte Burst</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                            <h4 className='fs-5'>ByteBurst Pages</h4>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end  flex-grow-1">
                            <NavLink to='/' className='nav-link nav-bar color-light px-3'>Home</NavLink>
                            <NavLink to='/about' className='nav-link nav-bar px-3'>About</NavLink>
                            <NavLink to='/service' className='nav-link nav-bar px-3'>Service</NavLink>
                            <NavLink to='/Contact' className='nav-link nav-bar px-3'>Contact</NavLink>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar >
    )
}


export default Navbar1;