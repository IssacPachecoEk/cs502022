import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/picture.png";
import Toolstack from "./Toolstack";
import Footer from "@/components/Footer";

function Index() {
  return (
    <>
      <Container fluid className="about-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ textAlign: "center", fontSize: "2.1em", paddingBottom: "20px" }}>
                Who <strong className="purple">I AM</strong>?
              </h1>
              <Aboutcard />
            </Col>
            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img src={laptopImg} alt="about" className="img-fluid" />
            </Col>
          </Row>
          <h1 className="project-heading">
            Professional <strong className="purple">Skills </strong>
          </h1>

          <Techstack />

          <h1 className="project-heading">
            <strong className="purple">Applications</strong> I use
          </h1>
          <Toolstack />
        </Container>
      </Container>
      <Footer />
    </>
  );
}

export default Index;
