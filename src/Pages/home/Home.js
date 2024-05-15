
import { Col, Container, Row } from "react-bootstrap";
import Navbar1 from "../../components/navbar/Navbar";
import './Home.css';
import headImg from '../../assests/img/pexels-fauxels-3182773.jpg';
import { useState } from 'react';
import Project from "../../components/projectItems/Project";
import Review from "../../components/review/Review";
import Client from "../../components/client/Client";
import Footer from "../../components/footer/Footer";
import Faq from "../../components/FAQ/Faq";
import { projectData } from "../../data";

function Home() {
    const [projects, setProjects] = useState(projectData);
    return (
        <div>
            <Navbar1 />
            <Container>
                <Row className="my-md-5">
                    <Col lg={6} className="mt-md-3">
                        <h1 className="header mt-5" data-aos="fade-up" data-aos-delay="1200">Journey-centric websites for customers</h1>
                        <p className="descript" data-aos="fade-in" data-aos-delay="1500"> We create web experiences for businesses <br />dedicated  to crafting seamless customer journeys.</p>
                    </Col>
                    <Col lg={6} className="mt-4" data-aos="flip-right" data-aos-delay="2000">
                        <img src={headImg} className="img-fluid" alt="header" />
                    </Col>
                </Row>
                <Row className="my-5 mx-0">
                    <h2 className="text-center mt-5" data-aos="fade-in">Our Works</h2>
                    <Row className="row-cols-1 mx-0 row-cols-md-2 row-cols-lg-3">
                        {projects.map((item) => (
                            <Col key={item.id} className="project-container1" data-aos="fade-up" data-aos-delay="800">
                                <Project {...item} />
                            </Col>
                        ))}
                    </Row>
                </Row>
                <Row fluid className="my-5 py-5">
                    <Review />
                </Row>
            </Container>
            <Client />
            <Faq />
            <Container>
                <Footer />
            </Container>
        </div>
    )
}
export default Home;
