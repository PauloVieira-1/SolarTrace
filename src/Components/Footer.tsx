import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <footer className="bg-dark text-light pt-5 mt-5">
            <Container className="py-5">
                <Row className="">
                    <Col lg={3} md={6}>
                        <h4 className="text-white mb-4">Quick Links</h4>
                        <a className="btn btn-link" href="/home">Home</a>
                        <a className="btn btn-link" href="/about">About Us</a>
                        <a className="btn btn-link" href="/contact">Contact Us</a>
                    </Col>
                    <Col lg={3} md={6}>
                        <h4 className="text-white mb-4">Get In Touch</h4>
                        <p className="mb-2 ps-4">LOCATION TO ADD + EMAIL</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;