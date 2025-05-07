import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <footer className="bg-dark text-light pt-5 mt-5">
            <Container className="py-5 ms-4">
                <Row>
                    <Col lg={3} md={6} className="pt-3 ms-5">
                        <h4 className="text-white mb-4">Quick Links</h4>
                        <a className="btn btn-link" href="/">Home</a>
                        <a className="btn btn-link" href="/process">Process</a>
                        <a className="btn btn-link" href="/partners">Collaborators</a>
                    </Col>
                    <Col lg={3} md={6} className="pt-3 ms-5">
                        <h4 className="text-white mb-4">Get In Touch</h4>
                        <p className="mb-2"><i className="fas fa-map-marker-alt me-3"></i>Morsestraat 25, 4004 JP Tiel, The Netherlands</p>
                        <p className="mb-2"><i className="fas fa-envelope me-3"></i>info.benelux@solarwatt.com</p>
                        <p><i className="fas fa-phone me-3"></i>+31 (0)344 767 002</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;