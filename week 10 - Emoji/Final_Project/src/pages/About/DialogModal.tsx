import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function DialogModal(props: {
  state: boolean,
  onHide: (value: boolean) => void,
  title: string,
  description: string
}) 
{
  const handleClose = () => {
    props.onHide(!props.state);
  }
  return (
    <Modal  aria-labelledby="example-modal-sizes-title-lg" centered show={props.state} onHide={() => handleClose()}>
      <Modal.Header style={{ color:"gold", backgroundColor: "black" }} closeButton>
      <Modal.Title  className="ms-auto" id="example-modal-sizes-title-lg">
        {props.title}
        </Modal.Title>
        </Modal.Header>
      <Modal.Body  style={{ textAlign: "justify", color:"white", backgroundColor: "gray", textShadow: "1px 1px black" }} >
          {props.description}
      </Modal.Body>
      <Modal.Footer style={{ padding: "0px", justifyContent: "center", backgroundColor: "black" }}>
      <Button onClick={() => handleClose()}>Close</Button>
      </Modal.Footer>
    </Modal >
  );
}

export default DialogModal;