import Map from "../Components/Map"
import { Row } from "react-bootstrap"
import Background from "../assets/background1.png"
import ButtonComponent from "../Components/Button.tsx"
import SupplyChainOverview from "../Components/SupplyChainOverview.tsx"

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
   <h1>Explore How SolarTrace <br /> Distributes Its Solar Panels</h1>
<p className="mt-3">
    From raw polysilicon production in Qinghai, China, to final delivery in the Netherlands, Solarwatt ensures traceability and sustainability across every phase of its supply chain—including renewable-powered manufacturing, low-carbon certifications, and efficient intercontinental transport.
</p>
<ButtonComponent className="btn btn-primary mt-3 m-100" variant="secondary" onClick={() => {window.scrollTo({top: 1500, behavior: "auto"})}}>
            Learn More
        </ButtonComponent>
    </div>
</div>
        <SupplyChainOverview></SupplyChainOverview>
        <div  className="d-flex flex-column align-items-center mb-0 mt-4">
            <Row className="d-flex justify-content-center align-items-center w-100">
            </Row>
            <Row className="d-flex justify-content-center align-items-center w-100 mt-4">
                <Map></Map>
            </Row>
        </div>
        </>
    )    
}

export default Process


