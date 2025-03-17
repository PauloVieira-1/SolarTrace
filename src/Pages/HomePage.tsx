import { Container, Col, Row } from "react-bootstrap"
import Button from "../Components/Button"
import { Link } from "react-router-dom"
function HomePage() {
    return ( 
        <div className="bg-light pt-3 pb-5" style={{height: "90vh"}}>
            <div className="text-center my-5">
                <h3 className="fw-bold text-primary">Explore Our Available Tools</h3>
                <h6 className="fw-light text-secondary">Understand Your Solarwatt Products Better With SolarTrace</h6>
            </div>
        <div className="d-flex justify-content-center">
        <Container className="bg-primary text-center rounded-5 mx-5 py-5 text-white">
            <Row className="pb-3">
            <div className="p-5">
                <h1 className="display-2 fw-bold">SolarTrace</h1>
                <h5 className="fw-light">Solar Tracking Service by Solarwatt</h5>
            </div>
            </Row>
            <Row  className="pb-4 px-5 mx-5">
            <Col xs={4}>
            <Button className="btn" variant="secondary">Course</Button>
            </Col>
            <Col xs={4}>
            <Link to="/process">
            <Button className="btn"  variant="outline-secondary">Process</Button>
            </Link>
            </Col>
            <Col xs={4}>
            <Link to="/partners">
            <Button className="btn" variant="secondary">Partners</Button>
            </Link>
            </Col>
            </Row>
        </Container>
        </div>
        </div>
    )
}

export default HomePage