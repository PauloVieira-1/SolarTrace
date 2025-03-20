import Map from "../Components/Map"
import { Container, Row } from "react-bootstrap"

function Process() {
    return (
        <Container fluid className="d-flex justify-content-center align-items-center mb-5 mt-4">
            <Row className="d-flex justify-content-center align-items-center w-100">
                <Map></Map>
            </Row>
        </Container>
    )    
}

export default Process


