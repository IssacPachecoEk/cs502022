import Card from "react-bootstrap/Card";
import {
  MdMovie,
  MdMenuBook,
  MdVideogameAsset,
  MdCardTravel
} from "react-icons/md";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-3">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I'm <strong style={{ color: "#ffd700" }}>Issac Nolberto Pacheco Ek </strong>
            from <strong style={{ color: "#ffd700" }}> Mérida, Yucatán, México. </strong>
            I'm a student DOCTORAL in Computers Systems at the US University of the South.
            <br />
            <br />
            Apart from programming, some activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <MdMovie /> Watching Movies and Series
            </li>
            <li className="about-activity">
              <MdMenuBook /> Reading Documentation and Learning more!
            </li>
            <li className="about-activity">
              <MdVideogameAsset /> Playing Video Games
            </li>
            <li className="about-activity">
              <MdCardTravel /> Traveling
            </li>
          </ul>
          <br />
          <i>
            <strong style={{ textAlign: 'center', color: "#ffd700" }}>
              "Everyone in the world should learn to program because it teaches you to think."
            </strong>
          </i>
          <div style={{ textAlign: 'center' }}><strong className="blockquote-footer">Steve Jobs</strong></div>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
