import Navbar1 from "../../components/navbar/Navbar";
import { Col, Container, Row } from "react-bootstrap";
import './About.css'
import Footer from "../../components/footer/Footer"
import Review from "../../components/review/Review";
function About() {
    return (
        <div>
            <Navbar1 />
            <Container fluid className="about-header">
                <h1 className="header-text" data-aos="fade-up">
                    We transform brands through <br /> elevated digital experiences
                </h1>
            </Container>
            <Container fluid className="img-container" data-aos="fade-down">
                <div className="d-flex justify-content-center align-items-center w-100">
                    <img src="https://cdn.sanity.io/images/r115idoc/production/3b66583fd21ae75f2eeb0210f8d1682e2830cbe3-1920x1231.jpg?w=1920&q=80&fit=clip&auto=format" className="img-fluid" alt="" />
                </div>
            </Container>
            <Container className="review-container">
                <Review />
            </Container>
            <Container fluid className="reason-container">
                <Container>
                    <h2 className="why" data-aos="fade-in" data-aos-delay="300">
                        Why ByteBurst
                    </h2>
                    <Row className="about-boxes d-flex align-items-center d-flex justify-content-between" data-aos="fade-up" data-aos-delay="300">
                        {/* First */}
                        <Col md={7} className="about-descript order-2 order-md-1" >
                            <Row>
                                <Col>
                                    <h2 className="reason-num">01</h2>
                                    <h2 className="reason-text">Teams Led by Co-Founders </h2>
                                    <p className="reason-descript">We differentiate ourselves from large agencies where junior talent typically handles most of the work, and interactions with design leaders are limited. <br /><br />
                                        At Clay, our co-founders lead dedicated, senior-level teams with cross-disciplinary expertise to ensure project success.</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col className="image-container order-1 order-md-2 img-fluid" md={5}>
                            <img src="https://cdn.sanity.io/images/r115idoc/production/3cf229fd79c8af562f223b3fffabc1c2c5559de4-1260x1640.png?w=384&q=80&fit=clip&auto=format" alt="" />
                        </Col>
                    </Row>
                    {/* Second */}
                    <Row className=" about-boxes d-flex align-items-center d-flex justify-content-between" data-aos="fade-down" data-aos-delay="300">

                        <Col className="image-container order-1 img-fluid" md={5}>
                            <img src="https://cdn.sanity.io/images/r115idoc/production/85a0890bc2a083052456927af282e1dc94c00dad-1260x1640.png?w=384&q=80&fit=clip&auto=format" alt="" />
                        </Col>
                        <Col md={7} className="about-descript order-2 ">
                            <Row>
                                <Col>
                                    <h2 className="reason-num">02</h2>
                                    <h2 className="reason-text">Collaboration Is Key </h2>
                                    <p className="reason-descript reason-2">We prioritize communication and transparency in all our interactions with the aim of providing a premium client experience from the beginning to the end of the project.
                                        <br /><br />
                                        Our work with startups has made us more agile, and our experience with enterprise companies has allowed us to develop a refined approach to project management.</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    {/* Third */}
                    <Row className=" about-boxes d-flex align-items-center d-flex justify-content-between" data-aos="fade-up" data-aos-delay="300">
                        <Col md={7} className="about-descript order-2 order-md-1 ">
                            <Row>
                                <Col>
                                    <h2 className="reason-num">03</h2>
                                    <h2 className="reason-text">Our Work Is Future Proof</h2>
                                    <p className="reason-descript">We create designs that can easily scale and sustain your business goals for years to come.
                                        <br /><br />
                                        Our portfolio features multiple websites and products that have remained untouched for 5+ years, proving our work is future-proof.</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col className="image-container order-1 order-md-2 img-fluid" md={5}>
                            <img src="https://cdn.sanity.io/images/r115idoc/production/07203af67e183d3895f4c2fdec6ba4ce6c8a8a16-1260x1640.png?w=384&q=80&fit=clip&auto=format" alt="" />
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Footer />
        </div>
    )
}
export default About;