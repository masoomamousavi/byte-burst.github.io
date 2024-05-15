import { Col, Row, Container } from "react-bootstrap";
import { FaInstagram } from "react-icons/fa6";
import './Footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";
function Footer() {
    return (
        <Container>
            <Row className="d-flex justify-content-between align-items-center pt-5 px-5 px-md-0">
                <Col className="col-12 col-md-6 footer-text">
                    <h1 className="talk px-0" data-aos="fade-up" data-aos-delay="200">Let's Talk</h1>
                    <a href="mailto:masoomamosavi9@gmail.com"><span className="email" data-aos="fade-right" data-aos-delay="400">hey@byte.burst</span></a>
                </Col>
                <Col className="col-8 text-md-left col-md-6 py-5  py-md-0 ">
                    <Row className="fisrt-part d-flex align-items-center justify-content-center row-cols-md-3">
                        <Col>
                            <Link to='/' className='nav-link py-2'><span className="footer-nav">Home</span></Link>
                            <Link to='/about' className='nav-link py-2'><span className="footer-nav">About</span></Link>
                        </Col>
                        <Col>
                            <Link to='/service' className='nav-link py-2'> <span className="footer-nav">Service</span></Link>
                            <Link to='/contact' className='nav-link py-2'><span className="footer-nav">Contact</span></Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="py-md-5 pb-5 px-5 px-md-0  my-3 d-flex justify-content-between align-items-center ">
                <Col className="col-12 col-md-6">
                    <span className="email fs-6" >112 Munchen, Frankfort, CA 20033</span>
                </Col>
                <Col className=" col-12 col-md-5 px-md-4 mx-md-3 pt-4 pt-md-0">
                    <Row className="rows-col-4 justify-content-start d-flex " >
                        <Col className="col-1 icon px-4 fs-5"><Link to='https://www.linkedin.com/in/masooma-mousavi/' target="blank"><FaLinkedinIn /></Link></Col>
                        <Col className="col-1 icon px-4 fs-5"><Link to='https://github.com/masoomamousavi' target="blank"><FaGithub /></Link></Col>
                        <Col className="col-1 icon px-4 fs-5"><Link to='https://www.instagram.com/' target="blank"><FaInstagram /></Link></Col>
                        <Col className="col-1 icon px-4 fs-5"><Link to='https://www.facebook.com/' target="blank"><FaFacebookF /></Link></Col>
                        <Col className="col-1 icon px-4 fs-5"><Link to='https://twitter.com/' target="blank"><BsTwitterX /></Link></Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;