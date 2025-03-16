import { Container, Row, Col } from "react-bootstrap"
import ButtonComponent from "../Components/Button"

function CustomCard({name, imgSrc, onClick}: {name: string, imgSrc: string, onClick: () => void}) {
    return (
        <Container className="card mx-5 my-5 bg-primary text-white rounded-5 text-center d-flex p-5 hover-effect" style={{width: "20rem", height: "25rem"}}>
            <Row className="mb-4">
                <Col>
                    <h2 className="fw-bold">{name}</h2>
                </Col>
            </Row>
            <Row style={{height: "15rem"}}>
                <img src={imgSrc} className="card-img-top w-100" alt="...">
                </img>
            </Row>
            <Row>
                <ButtonComponent className="btn btn-primary w-100 " onClick={onClick} variant="secondary">Learn More</ButtonComponent>
            </Row>
        </Container>
    )
}

export default CustomCard