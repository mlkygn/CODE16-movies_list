import { useState } from "react";
import NavbarComponent from "./components/NavbarComponent";
import CardComponent from "./components/CardComponent";
import { Row, Col, Container } from "reactstrap";
import Movies from "./data/movies";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavbarComponent />
      <Container className="py-5">
        <Row className="g-4">
          {Movies.map((movie, index) => (
            <Col sm="4" md="3" key={index}>
              <CardComponent title={movie.title} year={movie.year} img={movie.thumbnail} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;
