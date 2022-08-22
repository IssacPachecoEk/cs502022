import Footer from "@/components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import gob from "../../Assets/gob.ico";
//by orden
import sia from "../../Assets/Projects/Sia/login_sia.png";
import sia1 from "../../Assets/Projects/Sia/1.png";
import sia2 from "../../Assets/Projects/Sia/2.png";
import sia3 from "../../Assets/Projects/Sia/3.png";
import sia4 from "../../Assets/Projects/Sia/4.png";
import sia5 from "../../Assets/Projects/Sia/5.png";
import sia6 from "../../Assets/Projects/Sia/6.png";
import sia7 from "../../Assets/Projects/Sia/7.png";
import sia8 from "../../Assets/Projects/Sia/8.png";
import sia9 from "../../Assets/Projects/Sia/9.png";
import sia10 from "../../Assets/Projects/Sia/10.png";
import sia11 from "../../Assets/Projects/Sia/11.png";
///////////////////////////////////////////////////////////////
import asis from "../../Assets/Projects/Asistencias/login_as.png";
import asis1 from "../../Assets/Projects/Asistencias/1.png";
import asis2 from "../../Assets/Projects/Asistencias/2.png";
import asis3 from "../../Assets/Projects/Asistencias/3.png";
import asis4 from "../../Assets/Projects/Asistencias/4.png";
import asis5 from "../../Assets/Projects/Asistencias/5.png";
import asis6 from "../../Assets/Projects/Asistencias/6.png";
import asis7 from "../../Assets/Projects/Asistencias/7.png";
import asis8 from "../../Assets/Projects/Asistencias/8.png";
///////////////////////////////////////////////////////////////
import control from "../../Assets/Projects/Control/login_control.png";
import control1 from "../../Assets/Projects/Control/1.png";
import control2 from "../../Assets/Projects/Control/2.png";
import control3 from "../../Assets/Projects/Control/3.png";
import control4 from "../../Assets/Projects/Control/4.png";
import control5 from "../../Assets/Projects/Control/5.png";
import control6 from "../../Assets/Projects/Control/6.png";
import control7 from "../../Assets/Projects/Control/7.png";
import control8 from "../../Assets/Projects/Control/8.png";
import control9 from "../../Assets/Projects/Control/9.png";
import control10 from "../../Assets/Projects/Control/10.png";
import control11 from "../../Assets/Projects/Control/11.png";
import control12 from "../../Assets/Projects/Control/12.png";
import control13 from "../../Assets/Projects/Control/13.png";
import control14 from "../../Assets/Projects/Control/14.png";
import control15 from "../../Assets/Projects/Control/15.png";
///////////////////////////////////////////////////////////////
import examen from "../../Assets/Projects/Examen/login_examen.png";
import examen1 from "../../Assets/Projects/Examen/1.png";
import examen2 from "../../Assets/Projects/Examen/2.png";
import examen3 from "../../Assets/Projects/Examen/3.png";
import examen4 from "../../Assets/Projects/Examen/4.png";
import examen5 from "../../Assets/Projects/Examen/5.png";
import examen6 from "../../Assets/Projects/Examen/6.png";
import examen7 from "../../Assets/Projects/Examen/7.png";
import examen8 from "../../Assets/Projects/Examen/8.png";
import examen9 from "../../Assets/Projects/Examen/9.png";
import examen10 from "../../Assets/Projects/Examen/10.png";
import examen11 from "../../Assets/Projects/Examen/11.png";


function Index() {
  const imagesSia = [
    {
      original: sia,
      thumbnail: sia,
      originalHeight: 600
    },
    {
      original: sia1,
      thumbnail: sia1,
      originalHeight: 600
    },
    {
      original: sia2,
      thumbnail: sia2,
      originalHeight: 600
    },
    {
      original: sia3,
      thumbnail: sia3,
      originalHeight: 600
    },
    {
      original: sia4,
      thumbnail: sia4,
      originalHeight: 600
    },
    {
      original: sia5,
      thumbnail: sia5,
      originalHeight: 600
    },
    {
      original: sia6,
      thumbnail: sia6,
      originalHeight: 600
    },
    {
      original: sia7,
      thumbnail: sia7,
      originalHeight: 600
    },
    {
      original: sia8,
      thumbnail: sia8,
      originalHeight: 600
    },
    {
      original: sia9,
      thumbnail: sia9,
      originalHeight: 600
    },
    {
      original: sia10,
      thumbnail: sia10,
      originalHeight: 600
    },
    {
      original: sia11,
      thumbnail: sia11,
      originalHeight: 600
    },
  ];
  const imagesExamen = [
    {
      original: examen,
      thumbnail: examen,
      originalHeight: 600
    },
    {
      original: examen1,
      thumbnail: examen1,
      originalHeight: 600
    },
    {
      original: examen2,
      thumbnail: examen2,
      originalHeight: 600
    },
    {
      original: examen3,
      thumbnail: examen3,
      originalHeight: 600
    },
    {
      original: examen4,
      thumbnail: examen4,
      originalHeight: 600
    },
    {
      original: examen5,
      thumbnail: examen5,
      originalHeight: 600
    },
    {
      original: examen6,
      thumbnail: examen6,
      originalHeight: 600
    },
    {
      original: examen7,
      thumbnail: examen7,
      originalHeight: 600
    },
    {
      original: examen8,
      thumbnail: examen8,
      originalHeight: 600
    },
    {
      original: examen9,
      thumbnail: examen9,
      originalHeight: 600
    },
    {
      original: examen10,
      thumbnail: examen10,
      originalHeight: 600
    },
    {
      original: examen11,
      thumbnail: examen11,
      originalHeight: 600
    },
  ];
  const imagesControl = [
    {
      original: control,
      thumbnail: control,
      originalHeight: 600
    },
    {
      original: control1,
      thumbnail: control1,
      originalHeight: 600
    },
    {
      original: control2,
      thumbnail: control2,
      originalHeight: 600
    },
    {
      original: control3,
      thumbnail: control3,
      originalHeight: 600
    },
    {
      original: control4,
      thumbnail: control4,
      originalHeight: 600
    },
    {
      original: control5,
      thumbnail: control5,
      originalHeight: 600
    },
    {
      original: control6,
      thumbnail: control6,
      originalHeight: 600
    },
    {
      original: control7,
      thumbnail: control7,
      originalHeight: 600
    },
    {
      original: control8,
      thumbnail: control8,
      originalHeight: 600
    },
    {
      original: control9,
      thumbnail: control9,
      originalHeight: 600
    },
    {
      original: control10,
      thumbnail: control10,
      originalHeight: 600
    },
    {
      original: control11,
      thumbnail: control11,
      originalHeight: 600
    },
    {
      original: control12,
      thumbnail: control12,
      originalHeight: 600
    },
    {
      original: control13,
      thumbnail: control13,
      originalHeight: 600
    },
    {
      original: control14,
      thumbnail: control14,
      originalHeight: 600
    },
    {
      original: control15,
      thumbnail: control15,
      originalHeight: 600
    },
  ];
  const imagesAs = [
    {
      original: asis,
      thumbnail: asis,
      originalHeight: 600
    },
    {
      original: asis1,
      thumbnail: asis1,
      originalHeight: 600
    },
    {
      original: asis2,
      thumbnail: asis2,
      originalHeight: 600
    },
    {
      original: asis3,
      thumbnail: asis3,
      originalHeight: 600
    },
    {
      original: asis4,
      thumbnail: asis4,
      originalHeight: 600
    },
    {
      original: asis5,
      thumbnail: asis5,
      originalHeight: 600
    },
    {
      original: asis6,
      thumbnail: asis6,
      originalHeight: 600
    },
    {
      original: asis7,
      thumbnail: asis7,
      originalHeight: 600
    },
    {
      original: asis8,
      thumbnail: asis8,
      originalHeight: 600
    },
  ];
  return (
    <>
      <Container fluid className="project-section">
        <Container>
          <h1 className="project-heading">
            This is my <strong className="purple">Work </strong>
          </h1>
          <p style={{ color: "white", textAlign: "center" }}>
            These are some projects.
            I've worked on it throughout my job experience.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={imagesSia}
                title="Archive Integral System (SIA)"
                techstack="HTML | BOOTSTRAP | CODEIGNITER | MYSQL"
                company={gob}
                link="http://educacion.yucatan.gob.mx/sia/"
                description="The Integral System of Archives of the Secretary of Education of the Government of the State of Yucatan (SEGEY). 
              It's sets of departments and archived files that formalize the documentary procedures, 
              through the automated platform that allows the personnel  (user) to capture the inventory and generate several reports in real-time."
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={imagesAs}
                title="Assistance"
                techstack="HTML | NUXT JS | LARAVEL | MYSQL"
                company={gob}
                link="https://asistenciasegey.yucatan.gob.mx/"
                description="The platform captures and consults the evidence (photos) of all the schools in the state of Yucatan, 
              facilitating the audit by the authorized personnel to verify the attendance, 
              official identification, and justifications of the teachers.
              Using a report generated by type, month, and year of the document (PDF)."
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={imagesControl}
                title="School Control System"
                techstack="HTML | NUXT JS | LARAVEL | MYSQL"
                company={gob}
                link="http://www.educacion.yucatan.gob.mx/"
                description=" Automated application for school control management, 
              focused on information distribution in all the 'telebachilleratos' of the state of Yucatan. 
              Providing operators with registration, periodic updating, and student history, 
              optimizing the statistical processes of the current and next school year."
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={imagesExamen}
                title="Exam"
                techstack="HTML | NUXT JS | NODE JS | MONGODB"
                company={gob}
                link="http://www.educacion.yucatan.gob.mx/valoracion/"
                description="The knowledge assessment test is applied annually to more than 5,000 outstanding students simultaneously.
              it accounts for more than several multiple choice questions (text and images). 
              Divided into different types of exams, for each competition, there is a personalized time limit."
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Footer />
    </>
  );
}

export default Index;
