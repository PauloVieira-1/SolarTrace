
import { Container, Row, Col } from "react-bootstrap"
import CustomCard from "../Components/CustomCard"
import { collaborators } from "../other/collaborators"
function Partners() {
    return (
        <div className="bg-light pt-3" style={{height: "90vh"}}>
        <div className="text-center my-5">
            <h3 className="fw-bold text-primary">Find out More About our Collaborators</h3>
            <h6 className="fw-light text-secondary">The Organizations that made this possible </h6>
        </div>
        <Container className="d-flex justify-content-center align-items-center">
            <Row>
                {collaborators.map((collaborator) => {
                    return (
                        <Col>
                            <CustomCard name={collaborator.name} imgSrc={collaborator.imgSrc} onClick={() => {}}/>
                        </Col>
                    )
                })}
            </Row>
        </Container>
        </div>
    )
}

export default Partners