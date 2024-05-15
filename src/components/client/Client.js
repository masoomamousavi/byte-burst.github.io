

import { Col, Container, Row } from "react-bootstrap";
function Client() {
    return (
        <Container fluid style={{ backgroundColor: '#EEEEEE' }} className="py-5">
            <div className="d-block d-md-flex px-3 align-items-center" fluid>
                <span className="mb-3 d-none d-md-block">_________</span>
                <h3 className="mx-2 px-0 text-sm-center" style={{ fontWeight: '400', fontSize: '20px' }}>Clients</h3>
            </div>
            <Row className='row-cols-2 row-cols-md-3 row-cols-lg-4 d-flex'>
                <Col className=' justify-content-center d-flex align-items-center  py-4'
                    data-aos="fade-in" data-aos-delay="1000">
                    <img src="https://dd.nyc/wp-content/uploads/2022/07/seven-1.svg" alt="" className="img-fluid" style={{ width: '100px', height: 'auto' }} />
                </Col>
                <Col className=' justify-content-center d-flex align-items-center py-4'
                    data-aos="fade-in" data-aos-delay="800">
                    <img src="https://dd.nyc/wp-content/uploads/2023/04/Loreal-1.png" className="img-fluid" alt="" style={{ width: '100px', height: 'auto' }} />
                </Col>
                <Col className=' justify-content-center d-flex align-items-center py-4'
                    data-aos="fade-in" data-aos-delay="600">
                    <img src="https://dd.nyc/wp-content/uploads/2022/09/Gett-1-1.svg" className="img-fluid" alt="" style={{ width: '100px', height: 'auto' }} />
                </Col>
                <Col className=' justify-content-center d-flex align-items-center py-4'
                    data-aos="fade-in" data-aos-delay="400">
                    <img src="https://dd.nyc/wp-content/uploads/2023/04/Frame-116046204-1.png" alt="" className="img-fluid" style={{ width: '100px', height: 'auto' }} />
                </Col>
                <Col className=' justify-content-center d-flex align-items-center py-4'
                    data-aos="fade-in" data-aos-delay="1200">
                    <img src="https://dd.nyc/wp-content/uploads/2023/04/Frame-116046210-1.png" alt="" className="img-fluid" style={{ width: '100px', height: 'auto' }} />
                </Col>
                <Col className=' justify-content-center d-flex align-items-center py-4'
                    data-aos="fade-in" data-aos-delay="1400">
                    <img src="https://dd.nyc/wp-content/uploads/2022/07/snailz-1.svg" alt="" className="img-fluid" style={{ width: '100px', height: 'auto' }} />
                </Col>
                <Col className=' justify-content-center d-flex align-items-center py-4'
                    data-aos="fade-in" data-aos-delay="1600">
                    <img src="https://dd.nyc/wp-content/uploads/2023/04/Frame-116046215-1.png" alt="" className="img-fluid" style={{ width: '100px', height: 'auto' }} />
                </Col>
                <Col className=' justify-content-center d-flex align-items-center py-4'
                    data-aos="fade-in" data-aos-delay="1800">
                    <img src="https://dd.nyc/wp-content/uploads/2022/07/MG-1.svg" alt="" className='img-fluid' style={{ width: '100px', height: 'auto' }} />
                </Col>
            </Row>
        </Container>
    )
}
export default Client;