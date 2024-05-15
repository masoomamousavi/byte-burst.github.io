import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import './Review.css'
function Review() {
    const [review, setReview] = useState(
        [
            {
                "id": 1,
                "rate": "200+",
                "text": "successful digital projects"
            },
            {
                "id": 2,
                "rate": "4",
                "text": "years in business"
            },
            {
                "id": 3,
                "rate": "67",
                "text": "Global Team Members"
            },
        ]
    )
    return (
        <Row className="d-flex justify-content-between m-0">
            {review.map((item) => (
                <Col key={item.id} className="col-lg-4 pt-lg-0 py-2 py-lg-0 col-md-6 col-12 review-box m-0"
                    data-aos="flip-down" data-aos-delay="800">
                    <h3 className="rate p-0">{item.rate}</h3>
                    <h5 className="rate-text">{item.text}</h5>
                </Col>
            ))}
        </Row>
    )
}

export default Review;