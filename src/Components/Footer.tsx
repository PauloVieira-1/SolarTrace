import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <footer className="bg-dark text-light pt-5 mt-5">
            <Container className="py-5">
                <Row>
                    <Col lg={3} md={6}>
                        <h4 className="text-white mb-4">Quick Links</h4>
                        <a className="btn btn-link" href="/">Home</a>
                        <a className="btn btn-link" href="/about">About Us</a>
                        <a className="btn btn-link" href="/contact">Contact Us</a>
                    </Col>
                    <Col lg={3} md={6}>
                        <h4 className="text-white mb-4">Get In Touch</h4>
                        <p className="mb-2"><i className="fas fa-map-marker-alt me-3"></i>123 Street, City, Country</p>
                        <p className="mb-2"><i className="fas fa-envelope me-3"></i>info@example.com</p>
                        <p><i className="fas fa-phone me-3"></i>+123 456 7890</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;