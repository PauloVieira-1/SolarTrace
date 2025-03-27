import { Container, Row, Col } from "react-bootstrap";
import CustomCard from "../Components/CustomCard";
import { collaborators } from "../other/collaborators";

function Partners() {
    return (
        <div className="bg-light pt-3" style={{ minHeight: "90vh" }}>
            <div className="text-center my-5">
                <h3 className="fw-bold text-primary">Find out More About our Collaborators</h3>
                <h6 className="fw-light text-secondary">The Organizations that made this possible</h6>
            </div>
            <Container>
                <Row className="justify-content-center gap-5">
                    {collaborators.map((collaborator, index) => (
                        <Col key={index} xs={12} sm={6} md={6} lg={4} xl={3} className="d-flex justify-content-center">
                            <CustomCard 
                                name={collaborator.name} 
                                imgSrc={collaborator.imgSrc} 
                                onClick={() => {}} 
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default Partners;
