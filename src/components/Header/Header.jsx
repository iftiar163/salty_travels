import { Button, Col, Container, Row } from "react-bootstrap";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <Container>
          <Row>
            {/* Logo */}
            <Col md={4}>
              <div className="logo">
                <Link to={"/"}>
                  <img
                    src="https://res.cloudinary.com/dwrvexxbo/image/upload/v1704995968/salty_travels/br5kmwwfgoje8bh7cksq.png"
                    alt=""
                  />
                </Link>
              </div>
            </Col>
            <Col md={8}>
              {/* Menu */}
              <Row>
                <Col md={8}>
                  <div className="menu_link">
                    <ul>
                      <li>
                        <Link to={"/"}>Home</Link>
                      </li>
                      <li>
                        <Link to={"/about-us"}>About Us</Link>
                      </li>
                      <li>
                        <Link to={"/tours"}>Destinations</Link>
                      </li>
                      <li>
                        <Link to={"/blog"}>Blog</Link>
                      </li>
                    </ul>
                  </div>
                </Col>
                {/* Book Now Button */}
                <Col md={4}>
                  <div className="book-now">
                    <Link to={"/book-now"}>
                      <Button className="book_button">Book Now</Button>
                    </Link>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </header>
    </>
  );
};

export default Header;
