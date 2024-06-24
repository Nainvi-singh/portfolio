import { Container, Row, Col } from "react-bootstrap";
import logo from "../assests/img/logo.svg";
import linkedin from "../assests/img/nav-icon1.svg";
import github from "../assests/img/github.svg";
import leetcode from "../assests/img/leetcode.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">

          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
            
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://leetcode.com/u/Nainvi_/"><img src={leetcode} alt="Icon" /></a>
              <a href="https://github.com/Nainvi-singh"><img src={github} alt="Icon" /></a>
              <a href="https://www.linkedin.com/in/nainvi-singh/"><img src={linkedin} alt="Icon" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}