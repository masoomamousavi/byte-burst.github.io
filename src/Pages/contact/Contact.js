
import Navbar1 from "../../components/navbar/Navbar";
import { Col, Row, Container } from "react-bootstrap";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { Link } from "react-router-dom";
import './Contact.css'
import { FaLinkedinIn } from "react-icons/fa6";
function Contact() {
    return (
        <Container fluid className="p-0 m-0">
            <Navbar1 />
            <Container className="contact-container1 mb-5">
                <Row className="d-flex w-100  justify-content-between">
                    <Col md={6}>
                        <h1 className="contact-head" data-aos="fade-up"> Let's Talk</h1>
                        <p className="contact-text" data-aos="fade-down" data-aos-delay="300">We'd love to learn more about you and what we can design and build together.</p>
                        <Row className="w-100">
                            <Col className="client-job" data-aos="fade-down" data-aos-delay="600">
                                <h3>Become A client</h3>
                                <a href="mailto:masoomamosavi9@gmail.com"> <h2>hey@byte.burst</h2></a>
                            </Col>
                            <Col className="client-job" data-aos="fade-down" data-aos-delay="400">
                                <h3>Work at ByteBurst</h3>
                                <a href="mailto:masoomamosavi9@gmail.com"><h2>jobs@byte.burst</h2></a>
                            </Col>
                            <Col className="col-12 icons w-100 d-flex" data-aos="fade-in" data-aos-delay="900">
                                <Row className="d-flex icons mt-lg-4 mt-2" >
                                    <Col className="col-1 icon"><FaInstagram /></Col>
                                    <Col className="col-1 px-4 mx-2 icon"><FaFacebookF /></Col>
                                    <Col className="col-1 px-4 mx-2 icon"><FaGithub /></Col>
                                    <Col className="col-1 px-4 mx-2 icon"><BsTwitterX /></Col>
                                    <Col className="col-1 px-4 mx-2 icon"><FaLinkedinIn /></Col>
                                </Row>
                            </Col>
                            <Col className="col-12 py-md-4 py-5" >
                                <span className="email1 fs-6">112 Munchen, Frankfort, CA 20033</span>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={5} className="contact-img" data-aos="flip-up" data-aos-delay="1200">
                        <img src="https://cdn.sanity.io/images/r115idoc/production/354e06acbe1715d967e33074e995aeeb961e5970-1260x1668.png?w=750&q=80&fit=clip&auto=format" alt="" />
                    </Col>

                </Row>
            </Container >

        </Container>
    )
}
export default Contact;