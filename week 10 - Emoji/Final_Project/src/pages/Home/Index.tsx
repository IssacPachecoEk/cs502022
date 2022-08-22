import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/yo.png";
import Info from "./Info";
import Experience from "./Experience";
import Type from "./Type";
import Footer from "@/components/Footer";

function Index() {
  return (
    <>
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 0 }} className="heading">
                Welcome!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  🖐
                </span>
              </h1>
              <div className="heading-name">I'm<strong className="main-name"> Issac Nolberto Pacheco Ek</strong>
              </div>            
              <div style={{ padding: 40, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ justifyContent: "center", textAlign: "center", paddingBottom: 10, paddingTop: 50 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px"}}
              />
            </Col>
          </Row>
        </Container>
        <Info />
      <Experience />
      </Container>
    </section>
    <Footer /> 
    </>
  );
}

export default Index;
