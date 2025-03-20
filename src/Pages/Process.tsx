import Map from "../Components/Map"
import { Container, Row } from "react-bootstrap"
import Background from "../assets/background1.png"
import ButtonComponent from "../Components/Button.tsx"

function Process() {
    return (
        <>
        <div className="imag-container">
            <img src={Background} style={{width: "100%", maxHeight: "70vh", objectFit: "cover"}}>
            </img>
            <div className="top-left ms-4 bg-dark p-5 rounded-5" style={{maxWidth: "35%"}}>
                <h1> Explore how SolarTrace <br/> Distributes it's Products</h1>
                <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti neque animi pariatur facilis quos odio sint minima laudantium numquam autem.</p>
            <ButtonComponent className="btn btn-primary mt-5" variant="secondary">Learn More</ButtonComponent>
            </div>
        </div>
        <Container fluid className="d-flex flex-column align-items-center mb-5 mt-4">
            <Row className="d-flex justify-content-center align-items-center w-100">

            </Row>
            <Row className="d-flex justify-content-center align-items-center w-100 mt-4">
                <Map></Map>
            </Row>
        </Container>
        </>
    )    
}

export default Process


