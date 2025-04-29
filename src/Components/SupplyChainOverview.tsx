import { Container, Row, Col, Card } from "react-bootstrap";
import { FaIndustry, FaTools, FaShip, FaSolarPanel } from "react-icons/fa";

const supplyChainData = [
    {
        title: "Polysilicon Production",
        location: "Qinghai Province, China",
        description: "Asia Silicon converts metallurgical-grade silicon into high-purity polysilicon using hydrochloration and CVD. 85% of the facility’s power comes from renewable sources, mainly hydropower.",
        icon: <FaIndustry size={50} />
    },
    {
        title: "Module Assembly",
        location: "Jiangsu Xuzhou & Sichuan Yibin, China",
        description: "High-efficiency TOPCon cells are laminated into solar panels with aluminum framing and junction boxes. Material recycling rate reaches 45% during production.",
        icon: <FaTools size={50} />
    },
    {
        title: "Intercontinental Transport",
        location: "China → Fos-sur-Mer, France → Netherlands",
        description: "Panels are shipped by sea to France, then trucked to final destinations. Emissions per 1m²: 0.775 kg CO₂-eq (shipping), 0.148 kg CO₂-eq (trucking).",
        icon: <FaShip size={50} />
    },
    {
        title: "Final Delivery & Installation",
        location: "Netherlands",
        description: "Solar panels are installed with a 30-year lifespan and 80% power retention. Each panel is fully traceable from module to polysilicon origin via serial and QR code tracking.",
        icon: <FaSolarPanel size={50} />
    }
];


const SupplyChainOverview = () => {
    return (
        <Container fluid className="py-5 px-5" style={{ backgroundColor: "#E6F4E6", minHeight: "90vh" }}>
            <Row className="text-center mb-4 text-primary p-4 mt-5">
                <Col>
                    <h1 className="fw-bold">Supply Chain Overview</h1>
                    <p className="lead">A detailed look at each stage of our solar panel production and distribution.</p>
                </Col>
            </Row>
            <Row className="justify-content-center">
                {supplyChainData.map((stage, index) => (
                    <Col key={index} md={6} lg={3} className="mb-4">
                        <Card className="text-center border-0 shadow-sm p-3 rounded-4" style={{ backgroundColor: "#F4FAF4", minHeight: "100%" }}>
                            <Card.Body>
                                <div className="mb-3 text-primary">{stage.icon}</div>
                                <Card.Title className="fw-bold pt-2">{stage.title}</Card.Title>
                                <Card.Subtitle className="text-muted mb-2 pb-2">{stage.location}</Card.Subtitle>
                                <Card.Text>{stage.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default SupplyChainOverview;
