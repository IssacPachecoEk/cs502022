import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Avatar.png";

function Info() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.3em" }}>
              PRESENTATION <span className="purple"> INFORMATION </span>
            </h1>
            <p className="home-about-body">
              I'm professional <i><b className="purple">  earnest, diligent, honest, and persistent. </b></i>
              <br />
              I like being <i><b className="purple">  decisive, teamwork, and determined </b></i> in what I love to do.
              <br />Among other <i><b className="purple">  quality’s loyalty, problem-solving skills, and work ethic. </b></i>
              <br />
              <br />
              I'm an expert in
              <i>
                <b className="purple"> Javascript, Vue js and React js. </b>
              </i>
              <br />
              My passion for building new&nbsp;
              <i>
                <b className="purple">Web Technologies and Serves </b> with {" "}
                <b className="purple">
                  Machine Learning and Trending Frameworks.
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <img src={myImg} className="img-fluid" alt="avatar" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Info;
