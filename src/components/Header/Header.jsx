import { Col, Container, Row } from "react-bootstrap";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <header>
        <Container>
          <Row>
            <Col md={4}>
              <div className="logo">
                <img src="../../../src/assets/img/Logo.png" alt="" />
              </div>
            </Col>
            <Col md={8}>Vuda</Col>
          </Row>
        </Container>
      </header>
    </>
  );
};

export default Header;
