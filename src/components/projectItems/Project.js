import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaArrowRightToBracket } from "react-icons/fa6";
import './Project.css'

function Project(props) {
    return (
        <Link to={`/projects/${props.id}`}>
            <Card to={`/projects/${props.id}`}>
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.descript}
                    </Card.Text>
                    <Link to={`/projects/${props.id}`}>
                        <span className='know-more'>
                            <span>Know More</span>
                            <FaArrowRightToBracket className='fs-5' />
                        </span>
                    </Link>
                </Card.Body>
                <Card.Footer className='align-tiems-center d-flex'>
                    <p>Developer: {props.developer}</p>
                </Card.Footer>
            </Card>
        </Link>
    )
}

export default Project;