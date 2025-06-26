import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "../Components/Button";
import Footer from "../Components/Footer";

function HomePage() {
	return (
		<>
		<div className="bg-light pt-3 pb-5 px-3" style={{ height: "100vh" }}>
			<div className="text-center my-5">
				<h3 className="fw-bold text-primary mt-5">Explore Our Available Tools</h3>
				<h6 className="fw-light text-secondary">
					Understand Your Solarwatt Products Better With SolarTrace
				</h6>
			</div>
			<div className="d-flex justify-content-center">
				<Container className="bg-primary text-center rounded-5 mx-5 py-5 text-white">
					<Row className="pb-3">
						<div className="p-5">
							<h1 className="display-2 fw-bold">SolarTrace</h1>
							<h5 className="fw-light">Solar Tracking Service by Solarwatt</h5>
						</div>
					</Row>
					<Row className="pb-4 px-5 mx-1">
						<Col xs={12} md={4} className="mb-3 text-center">
							<Link to="/course">
								<Button className="btn w-100" variant="secondary">
									Course
								</Button>
							</Link>
						</Col>
						<Col xs={12} md={4} className="mb-3 text-center">
							<Link to="/process">
								<Button className="btn w-100" variant="outline-secondary">
									Process
								</Button>
							</Link>
						</Col>
						<Col xs={12} md={4} className="mb-3 text-center">
							<Link to="/partners">
								<Button className="btn w-100" variant="secondary">
									Partners
								</Button>
							</Link>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
		<div className="d-flex justify-content-center mt-4">
  <Container
    className=" text-center rounded-5 mx-5 py-4 px-5 text-white bg-secondary mt-5"
  >
    <Row className="pb-3">
      <div className="px-4">
        <h4 className="fw-bold">Download Solarwatt's SDG Compliance Report</h4>
        <p className="fw-light">
          Discover how Solarwatt contributes to the UN Sustainable Development Goals.
        </p>
      </div>
    </Row>
    <Row className="justify-content-center">
      <Col xs={12} md={6}>
        <a href="/solarwatt_sdg_compliance_report.pdf" download className="text-decoration-none">
          <Button className="btn w-100" variant="outline-light">
            Download Report
          </Button>
        </a>
      </Col>
    </Row>
  </Container>
</div>


		<Footer />
		</>

	);
}

export default HomePage;
