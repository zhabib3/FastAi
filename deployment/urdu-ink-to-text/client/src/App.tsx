import React, { useRef } from "react";
import { Navbar, Container, Row, Col, Button } from "react-bootstrap";
import DrawGrid from "./Components/DrawGrid";
const primaryColor: string = "#675AF4";

const App: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  return (
    <div>
      <Navbar>
        <Navbar.Brand href="/">
          <h2 className="header">Ink to Alphabet Prediction</h2>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Made By <a href="#login">Zeeshan Habib</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>

      <Container
        className="text-center"
        style={{ marginTop: 40, display: "flex", alignItems: "center" }}
        fluid="lg"
      >
        <Row>
          {/* Draw Grid */}
          <Col
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h5 className="subheading">Drawing Grid</h5>
            <DrawGrid canvasRef={canvasRef} />
          </Col>

          {/* Prediction Box  */}
          <Col>
            <h5 className="subheading">Predicted Letter</h5>
          </Col>
        </Row>
      </Container>

      <Button
        style={{ marginTop: 30 }}
        className="btn btn-primary btn-large"
        onClick={() => {
          const canvas = canvasRef.current;
          const canvasImg = canvas?.toDataURL('image/png', 1.0);
          console.log(canvasImg); 
        }}
      >
        Predict
      </Button>
    </div>
  );
};

export default App;
