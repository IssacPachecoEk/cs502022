import { Card } from "react-bootstrap";
import ImageGallery from 'react-image-gallery';
import Tooltip from '@mui/material/Tooltip';

function ProjectCards(props: {
  title: string,
  imgPath?: string | any,
  description: string,
  techstack: string,
  link: string,
  company: string
}) {
  return (
    <Card className="project-card-view">
      <ImageGallery items={props.imgPath} />
      <Card.Body>
        <Card.Title style={{ textAlign: "center" }} className="purple">{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Card.Text className="purple" style={{ textAlign: "center" }}>{props.techstack}</Card.Text>
        <Tooltip title="CHECK OUT">
          <div className="card-center" >
            <a href={props.link} target="_blank" rel="noopener noreferrer">
              <Card.Img variant="bottom" style={{ width: "35px", height: "35px" }} src={props.company} alt="card-img" />
            </a>
          </div>
        </Tooltip>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
