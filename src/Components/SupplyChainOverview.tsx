import { Container, Row, Col, Card } from "react-bootstrap";
import { FaIndustry, FaTruck, FaWarehouse, FaSolarPanel } from "react-icons/fa";

const supplyChainData = [
    {
        title: "Raw Material Extraction",
        location: "Qinghai Province, China",
        description: "Polysilicon is produced using hydrochloration, distillation, and CVD processes. 85% of the electricity used comes from renewable sources.",
        icon: <FaIndustry size={50} />
    },
    {
        title: "Transport to Europe",
        location: "China → France → Netherlands",
        description: "Solar panels are shipped via sea and then transported by truck. Emissions breakdown: 0.775 kg CO₂-eq (shipping), 0.148 kg CO₂-eq (trucking).",
        icon: <FaTruck size={50} />
    },
    {
        title: "Warehousing & Distribution",
        location: "France",
        description: "The solar panels are stored and prepared for last-mile distribution to installation sites across Europe.",
        icon: <FaWarehouse size={50} />
    },
    {
        title: "Final Product Installation",
        location: "Netherlands",
        description: "Solar panels are installed with a 30-year service life. Each panel is traceable using serial codes and QR integration.",
        icon: <FaSolarPanel size={50} />
    }
];

const SupplyChainOverview = () => {
    return (
        <Container fluid className="py-5 px-5" style={{ backgroundColor: "#E6F4E6" }}>
            <Row className="text-center mb-4 text-primary p-4">
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
