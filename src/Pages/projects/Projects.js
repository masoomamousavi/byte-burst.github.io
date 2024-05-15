import axios from "axios";
import { useEffect, useState } from "react";
import Navbar1 from "../../components/navbar/Navbar";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import './Projects.css'
import Footer from "../../components/footer/Footer";
import Faq from "../../components/FAQ/Faq";
import { projectData } from "../../data";
function Projects() {
    const projectId = useParams().projectId;
    const myData = projectData.find(task => task.id == projectId)
    // const [myData, setMyData] = useState({});

    const defaultImage = require("../../assests/img/developer.avif").default;
    return (
        <>
            <Navbar1 />
            <Container fluid className="p-0 m-0 project-header" data-aos="fade-in" data-aos-delay="300">
                <img className=" header-img img-fluid" src={myData.image} alt="" />
            </Container>
            <Container className="pt-5">
                <h2 className="text-center mt-2" data-aos="fade-in">{myData.title}</h2>
                <Row>
                    <Col className="d-flex py-lg-5 py-0 justify-content-center developer1 col-3"
                        data-aos="fade-down" data-aos-delay="800" lg={3} md={12}>
                        <Row className="d-flex justify-content-center ">
                            <Col className="photo col-12 d-flex align-items-center justify-content-center" >
                                <img src={'https://xsgames.co/randomusers/assets/avatars/male/74.jpg' || defaultImage} className="m-auto" alt="User" />
                            </Col>
                            <Col className=" align-items-center py-2 my-0 d-flex justify-content-center col-12">
                                <h4 className="text-center">{myData.developer}</h4>
                            </Col>
                            <Col className="col-12 d-flex justify-content-center ">
                                <Col className="col-1 icon px-4 fs-5"><FaGithub /></Col>
                                <Col className="col-1 icon px-4 fs-5"><BsTwitterX /></Col>
                                <Col className="col-1 icon px-4 fs-5"><FaLinkedinIn /></Col>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="fs-5 my-lg-5 my-0 text-justify" lg={9} md={12} data-aos="fade-up" data-aos-delay="400">
                        {myData.completeDescript}
                    </Col>
                </Row>
            </Container>
            <Faq />
            <Container className="px-5">
                <Footer />
            </Container>
        </>
    )
}
export default Projects;