import { Col, Row } from "react-bootstrap";
import Tooltip from '@mui/material/Tooltip';
import { FaGitlab } from "react-icons/fa";
import { SiMicrosoftazure } from "react-icons/si";
import {
  SiLinux,
  SiVisualstudiocode,
  SiVercel,
} from "react-icons/si";
import DialogModal from "./DialogModal";
import { useState } from "react";


function Toolstack() {
  const [open16, setOpen16] = useState(false);
  const [open17, setOpen17] = useState(false);
  const [open18, setOpen18] = useState(false);
  const [open19, setOpen19] = useState(false);
  const [open20, setOpen20] = useState(false);
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/*                        modals                    */}
      <>
        <DialogModal
          state={open16}
          onHide={() => setOpen16(false)}
          title={"LINUX"}
          description="Linux is the best-known and most-used open source operating system. As an operating system, 
          Linux is software that sits underneath all of the other software on a computer, 
          receiving requests from those programs and relaying these requests to the computer’s hardware."
        />
        <DialogModal
          state={open17}
          onHide={() => setOpen17(false)}
          title={"VISUAL STUDIO CODE"}
          description="Visual Studio Code is an open-source code editor primarily used to correct 
          and repair cloud and web applications coding errors. VS Code is developed by Microsoft and supports the macOS, 
          Linux, and Windows operating systems. "
        />
        <DialogModal
          state={open18}
          onHide={() => setOpen18(false)}
          title={"AZURE"}
          description="Microsoft Azure, is Microsoft's public cloud computing platform. 
          It provides a range of cloud services, including compute, analytics, storage and networking."
        />
        <DialogModal
          state={open19}
          onHide={() => setOpen19(false)}
          title={"VERCEL"}
          description="Vercel is a platform for frontend frameworks and static sites, 
          built to integrate with your headless content, commerce, or database."
        />
        <DialogModal
          state={open20}
          onHide={() => setOpen20(false)}
          title={"GIT LAB"}
          description="The One DevOps Platform from planning to production, 
          bring teams together in one application. Ship secure code faster, deploy to any cloud, and drive business results."
        />
      </>
      <Tooltip title="VERCEL">
        <Col xs={4} md={2} className="tech-icons" onClick={() => setOpen19(true)}>
          <SiVercel />
          <p className="purple" style={{ fontSize: "15px" }}>VERCEL</p>
        </Col>
      </Tooltip>
      <Tooltip title="VISUAL STUDIO CODE">
        <Col xs={4} md={2} className="tech-icons" onClick={() => setOpen17(true)}>
          <SiVisualstudiocode />
          <p className="purple" style={{ fontSize: "15px" }}>VISUAL STUDIO CODE</p>
        </Col>
      </Tooltip>
      <Tooltip title="GIT LAB">
        <Col xs={4} md={2} className="tech-icons" onClick={() => setOpen20(true)}>
          <FaGitlab />
          <p className="purple" style={{ fontSize: "15px" }}>GIT LAB</p>
        </Col>
      </Tooltip>
      <Tooltip title="AZURE">
        <Col xs={4} md={2} className="tech-icons" onClick={() => setOpen18(true)}>
          <SiMicrosoftazure />
          <p className="purple" style={{ fontSize: "15px" }}>AZURE</p>
        </Col>
      </Tooltip>
      <Tooltip title="LINUX">
        <Col xs={4} md={2} className="tech-icons" onClick={() => setOpen16(true)}>
          <SiLinux />
          <p className="purple" style={{ fontSize: "15px" }}>LINUX</p>
        </Col>
      </Tooltip>
    </Row>
  );
}

export default Toolstack;
