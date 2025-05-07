import { Container, Row, Col } from "react-bootstrap"
import ButtonComponent from "../Components/Button"
import { useState } from "react"

function CustomCard({name, imgSrc, desc, onClick}: {name: string, imgSrc: string, desc: string, onClick: () => void}) {
    const [flipped, setFlipped] = useState(false)

    return (
        <Container className={`card mx-5 my-3 bg-primary text-white rounded-5 text-center d-flex flex-column p-5 hover-effect main-container `} style={{ minWidth: "20rem", height: "25rem" }} onClick={() => setFlipped(!flipped)}>
            <div
                className={`img-custom ${flipped ? "flip" : ""}`}
                id={`flip-img`}
            >       
                <div className="img-front">
                    <Row className="mb-4">
                        <Col>
                            <h3 className="fw-bold">{name}</h3>
                        </Col>
                    </Row>
                    <Row className="flex-grow-1 mb-3">
                        <Col className="d-flex justify-content-center align-items-center">
                            <img 
                                src={imgSrc} 
                                className="img-fluid rounded" 
                                style={{ objectFit: "contain", maxHeight: "11rem", width: "100%", minHeight: "11rem" }} 
                                alt={name} 
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ButtonComponent className="btn btn-primary w-100 mt-3" onClick={onClick} variant="secondary">Learn More</ButtonComponent>
                        </Col>
                    </Row>
                </div>
                <div className="img-back">
                    <Row className="mb-4">
                        <Col>
                            <h4 className="fw-bold">{name}</h4>
                        </Col>
                    </Row>
                    <Row className="flex-grow-1 mb-3">
                        <Col className="d-flex justify-content-center align-items-center">
                            <p className="text-wrap">{desc}</p>
                        </Col>
                    </Row>
                </div>
            </div>
        </Container>
    )
}

export default CustomCard



{/* <Container
className="p-2 my-2 main-container"
onClick={() => handleClick()}
style={{ cursor: "-moz-grab", maxHeight: "400px" }}
>
<div
  className={`img-custom ${isFlipped ? "flip" : ""}`}
  id={`flip-img ${id}`}
>
  <div
    style={{ height: "400px", width: "100%", maxHeight: "400px" }}
    className="d-flex gap-2 bg-custom-color-grey img-front"
  >
    <img
      alt=""
      className="h-100 w-100 img-front img-effect"
      src={imageName}
      style={{ objectFit: "cover" }}
    />
  </div>
  <div
    className="img-back bg-custom-color-grey-2 d-flex "
    style={{ height: "400px", width: "100%", maxHeight: "400px" }}
  >
    <div className="text-center d-flex flex-column justify-content-center align-items-center p-5 ">
      <h3 className="fw-bold text-align-center my-5">{children}</h3>
      <h5 className="fw-lighter my-2">{props.subHeading}</h5>
      <p>{props.description}</p>
    </div>
  </div>
</div>
</Container> */}