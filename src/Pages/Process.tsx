import Map from "../Components/Map"
import { Container, Row } from "react-bootstrap"
import Background from "../assets/background1.png"
import ButtonComponent from "../Components/Button.tsx"

function Process() {
    return (
        <>
        <div className="image-container position-relative" style={{ overflow: "hidden" }}>
    <img 
        src={Background} 
        alt="SolarTrace Distribution" 
        style={{ width: "100%", minHeight: "70vh", maxHeight: "80vh", objectFit: "cover" }} 
    />
    <div 
        className="top-left position-absolute text-white bg-dark p-4 rounded-4" 
        style={{ 
            top: "10%", 
            left: "5%", 
            width: "clamp(250px, 35%, 90%)" 
        }}
    >
        <h1>Explore how SolarTrace <br/> Distributes its Products</h1>
        <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti neque animi pariatur facilis quos odio sint minima laudantium numquam autem.
        </p>
        <ButtonComponent className="btn btn-primary mt-3 m-100" variant="secondary">
            Learn More
        </ButtonComponent>
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


