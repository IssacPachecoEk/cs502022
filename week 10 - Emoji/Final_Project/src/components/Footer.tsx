import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineFacebook,  AiOutlineMail, AiFillPhone } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip';

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Created in React JS and Designed by Issac Nolberto Pacheco Ek</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year}<br/>
          Powered By Vite JS
          </h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
          <Tooltip title="Facebook">
            <li className="social-icons">
              <a
                href="https://www.facebook.com/issacnolberto.pachecoek/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineFacebook />
              </a>
            </li>
            </Tooltip>
            <Tooltip title="LinkedIn">
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/issac-nolberto-pacheco-ek/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            </Tooltip>
            <Tooltip title="Email">
            <li className="social-icons">
              <a
                href="mailto:issacnolbertopachecoek@hotmail.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineMail />
              </a>
            </li>
            </Tooltip>
            <Tooltip title="Cell Phone">
            <li className="social-icons">
              <a
                href="tel:+529992284511"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillPhone />
              </a>
            </li>
            </Tooltip>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
