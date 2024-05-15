import Navbar1 from "../../components/navbar/Navbar";
import { Container, Row, Col } from "react-bootstrap";
import { GoDash } from "react-icons/go";
import Faq from "../../components/FAQ/Faq";
import './Service.css';
import Footer from "../../components/footer/Footer"
function Service() {
    return (
        <div>
            <Navbar1 />
            <Container>
                <Row>
                    <Col md={6} data-aos="fade-down" data-aos-delay="400">
                        <h1 className="service-tit">A full-service digital innovation partner</h1>
                        <p className="service-text mb-5">Our rich design and technology expertise delivers top brands and digital experiences.
                            Services list
                        </p>
                    </Col>
                </Row>
                {/* Fisrt */}
                <Row className="mt-5 pt-5" data-aos="flip-right" data-aos-delay="400">
                    <Col md={6} className="order-2 service-descript order-md-1">
                        <h1 className="service-tit1 mb-2 mb-lg-4 mt-3 mt-md-0">Branding</h1>
                        <p className="service-text1">At the core of our approach, we maintain that brand and UX are closely connected and work together. Our team specializes in creating and representing digital brand identities across channels, providing strategy assistance and guidelines to ensure consistency.
                        </p>
                        <Row className="mt-lg-4 my-3">
                            <Col className="col-12 service-item"><GoDash style={{ color: "#a8a7a7" }} size={"30px"} />Brand Strategy</Col>
                            <Col className="col-12 service-item"><GoDash style={{ color: "#a8a7a7" }} size={"30px"} />Brand Architecture</Col>
                            <Col className="col-12 service-item"> <GoDash style={{ color: "#a8a7a7" }} size={"30px"} />Verbal Identity</Col>
                            <Col className="col-12 service-item"><GoDash style={{ color: "#a8a7a7" }} size={"30px"} />Visual Identity</Col>
                            <Col className="col-12 service-item"><GoDash style={{ color: "#a8a7a7" }} size={"30px"} />Brand Guidelines</Col>
                            <Col className="col-12 service-item"><GoDash style={{ color: "#a8a7a7" }} size={"30px"} />Brand Experiences</Col>
                        </Row>
                    </Col>
                    <Col md={6} className="service-img order-1 order-md-2">
                        <img src="https://cdn.sanity.io/images/r115idoc/production/5b2ce67d6d18fabc188f7f4d36c0f05f1bad41ed-1260x1640.jpg?w=828&q=75&fit=clip&auto=format" alt="" className="img-fluid" />
                    </Col>
                </Row>
                {/* Second */}
                <Row className="second-col" data-aos="flip-left" data-aos-delay="600">
                    <Col md={6} className="service-img order-1">
                        <img src="https://cdn.sanity.io/images/r115idoc/production/227090fe4383b70148dc29c98f92b4d0aab7d371-1260x1640.jpg?w=828&q=75&fit=clip&auto=format" alt="" className="img-fluid" />
                    </Col>
                    <Col className="order-2 px-md-5 service-descript px-3">
                        <h1 className="service-tit1 mb-2 mb-lg-4 mt-3 mt-md-0">Digital Products</h1>
                        <p className="service-text1">At ByteBurst, we believe everyone deserves an exceptional user experience, whether using a product at work or in their free time.
                        </p>
                        <Row className="my-lg-4 my-3">
                            <Col className="col-12 service-item"><GoDash style={{ color: "#a8a7a7" }} size={"30px"} />Consumer & Enterprise Software</Col>
                            <Col className="col-12 service-item"><GoDash style={{ color: "#a8a7a7" }} size={"30px"} />User Research & Testing</Col>
                            <Col className="col-12 service-item"><GoDash style={{ color: "#a8a7a7" }} size={"30px"} />UI Design</Col>
                            <Col className="col-12 service-item"><GoDash style={{ color: "#a8a7a7" }} size={"30px"} />Motion Design</Col>
                            <Col className="col-12 service-item"><GoDash style={{ color: "#a8a7a7" }} size={"30px"} />Design System</Col>
                        </Row>
                    </Col>
                </Row>
                {/* third */}
                <Row className="second-col" data-aos="flip-right" data-aos-delay="800">
                    <Col md={6} className="order-2 service-descript order-md-1">
                        <h1 className="service-tit1 mb-2 mb-lg-4 mt-3 mt-md-0">Digital Products</h1>
                        <p className="service-text1">At ByteBurst, we believe everyone deserves an exceptional user experience, whether using a product at work or in their free time. We create memorable enterprise and consumer products as well as provide comprehensive design systems for effortless product iteration.
                        </p>
                        <Row className="my-lg-4 my-3">
                            <Col className="col-12 service-item"><GoDash style={{ color: "#a8a7a7" }} size={"30px"} />Consumer & Enterprise Software</Col>
                            <Col className="col-12 service-item"><GoDash style={{ color: "#a8a7a7" }} size={"30px"} />User Research & Testing</Col>
                            <Col className="col-12 service-item"> <GoDash style={{ color: "#a8a7a7" }} size={"30px"} />CX, UX & Interaction Design</Col>
                            <Col className="col-12 service-item"><GoDash style={{ color: "#a8a7a7" }} size={"30px"} />UI Design</Col>
                            <Col className="col-12 service-item"><GoDash style={{ color: "#a8a7a7" }} size={"30px"} />Motion Design</Col>
                            <Col className="col-12 service-item"><GoDash style={{ color: "#a8a7a7" }} size={"30px"} />Design System</Col>
                        </Row>
                    </Col>
                    <Col md={6} className="service-img order-1 order-md-2">
                        <img src="https://cdn.sanity.io/images/r115idoc/production/e30956439122f8180b3f87b98e647510ee59125e-1260x1640.jpg?w=828&q=75&fit=clip&auto=format" alt="" className="img-fluid" />
                    </Col>
                </Row>
                {/* fourth */}
                <Row className="second-col" data-aos="flip-left" data-aos-delay="1000">
                    <Col md={6} className="order-2 service-descript px-md-5 px-3">
                        <h1 className="service-tit1 mb-2 mb-lg-4 mt-3 mt-md-0">Content</h1>
                        <p className="service-text1">Authentic content is essential in the digital world. We work with brands to identify their unique content needs and deliver custom-made assets at the highest quality, down to the last detail.
                        </p>
                        <Row className="my-lg-4 my-3">
                            <Col className="col-12 service-item"><GoDash style={{ color: "#a8a7a7" }} size={"30px"} />Art Direction</Col>
                            <Col className="col-12 service-item"><GoDash style={{ color: "#a8a7a7" }} size={"30px"} />Illustration & Graphic Design</Col>
                            <Col className="col-12 service-item"> <GoDash style={{ color: "#a8a7a7" }} size={"30px"} />Iconography</Col>
                            <Col className="col-12 service-item"><GoDash style={{ color: "#a8a7a7" }} size={"30px"} />Animation</Col>
                            <Col className="col-12 service-item"><GoDash style={{ color: "#a8a7a7" }} size={"30px"} />Photo & Video</Col>
                            <Col className="col-12 service-item"><GoDash style={{ color: "#a8a7a7" }} size={"30px"} />3D</Col>
                        </Row>
                    </Col>
                    <Col md={6} className="service-img order-1">
                        <img src="https://cdn.sanity.io/images/r115idoc/production/34e2fb5b88127dc9571e37f7d05b7b9abc31c873-1260x1640.jpg?w=828&q=75&fit=clip&auto=format" alt="" className="img-fluid" />
                    </Col>
                </Row>
                {/* fifth */}
                <Row className="second-col pb-5 mb-5" data-aos="flip-right" data-aos-delay="1200">
                    <Col md={6} className="order-2 service-descript order-md-1">
                        <h1 className="service-tit1 mb-2 mb-lg-4 mt-3 mt-md-0">Development</h1>
                        <p className="service-text1">Our designers and developers collaborate to create websites and products that provide exceptional user experiences and functionality. We optimize search engine visibility, ensure accessibility, and maximize performance.v
                        </p>
                        <Row className="my-lg-4 my-3">
                            <Col className="col-12 service-item"><GoDash style={{ color: "#a8a7a7" }} size={"30px"} />Technology Consulting</Col>
                            <Col className="col-12 service-item"><GoDash style={{ color: "#a8a7a7" }} size={"30px"} />Architecture Planning</Col>
                            <Col className="col-12 service-item"> <GoDash style={{ color: "#a8a7a7" }} size={"30px"} />Mobile App Development</Col>
                            <Col className="col-12 service-item"><GoDash style={{ color: "#a8a7a7" }} size={"30px"} />Frontend Web Development</Col>
                            <Col className="col-12 service-item"><GoDash style={{ color: "#a8a7a7" }} size={"30px"} />Backend Development & API Integration</Col>
                            <Col className="col-12 service-item"><GoDash style={{ color: "#a8a7a7" }} size={"30px"} />Emerging Tech (AI, AR/VR, Wearables, Web3)</Col>
                        </Row>
                    </Col>
                    <Col md={6} className="service-img order-1 order-md-2">
                        <img src="https://cdn.sanity.io/images/r115idoc/production/e70227e68b2af56579a38d80aa22e50708c0a62e-1260x1640.jpg?w=828&q=75&fit=clip&auto=format" alt="" className="img-fluid" />
                    </Col>
                </Row>
            </Container>
            <Faq />
            <Footer />
        </div>
    )
}
export default Service;